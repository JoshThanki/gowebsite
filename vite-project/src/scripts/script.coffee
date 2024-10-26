class GoBoard
  constructor: (id,game) ->
    @$el = $ "#{id}"
    @size = @$el.children().length
    @$el.on 'click', @handleClick
    @game = game
    @cells = []
    @states = []
    @buildCells()
    
  handleClick: (e) =>
    $t = $(e.target)
    return unless $t.data('x')? and $t.data('y')?
    @game.handleClick $t.data('x'), $t.data('y') 
    
  addCell: (c) ->
    @cells[c.x] = [] unless @cells[c.x]
    @cells[c.x][c.y] = c
    
  buildCells: ->
    for cell in @$el.find(".cell")
      c = new GoCell $(cell).data('x'), $(cell).data('y'), @
      @addCell c
    
  isEmpty: (x,y) ->
    @cells[x][y].isEmpty()
    
  updateColor: ->
    @$el.removeClass @game.currentColor()
    @$el.addClass @game.nextColor() 
    
  removeStone: (stone) ->
    @cells[stone.x]?[stone.y]?.removeStone()
    
  addStone: (stone) ->
    cell = @cells[stone.x][stone.y]
    captures = cell.opponentGroupCaptures( stone.color )
    if cell.addStone(stone) 
      state = @encodeState()
      if @game.move_tree.stateArray().indexOf(state)  is -1
        { 
          captures: captures
          state: state
        }
      else
        cell.removeStone()
        @freeCaptures captures
        false
    else
      false
  
  freeCaptures: (captures) ->
    @cells[stone.x]?[stone.y]?.addStone(stone) for stone in captures
  
  encodeState: ->
    ( parseInt( row.map( (cell) -> cell.state() ).join(''), 3 ).toString(36) for row in @cells ).join(',')
    
  state: ->
    s = []
    for row in @cells
      s.push( cell.state() ) for cell in row
    s
    
  cellArray: ->
    cells = []
    for row in @cells 
      for cell in row
        cells.push cell
    cells
      
  unlockAll: ->
    for cell in @cellArray()
      cell.unLock()
        
  unColorAll: ->
    for cell in @cellArray()
      cell.$el.removeClass("counted-white").removeClass("counted-black")
      
  score: ->
    @unlockAll()
    @unColorAll()
    for cell in @cellArray() when cell.isUnlocked() and cell.isEmpty()
      cell.scoreArea()    
      
    wc = @$el.find('.counted-white').length
    bc = @$el.find('.counted-black').length
    wd = @$el.find('.dead.white').length
    bd = @$el.find('.dead.black').length
    @game.players.player_score.white = wc + bd*2 
    @game.players.player_score.black = bc + wd*2 
    @game.players.drawStats()      
    
class GoCell
  constructor: (x,y,board) ->
    @board = board
    @locked = false
    [ @x, @y ] = [ x, y ]
    @stone = false
    @$el = @board.$el.find "[data-x=#{x}][data-y=#{y}]"
    @dead = false
    
  state: ->
    return 0 if @isEmpty()
    return 1 if @isBlack()
    return 2 if @isWhite()
    
  isEmpty: ->
    not @stone
    
  isWhite: ->
    @stone?.color is 'white'
    
  isBlack: ->
    @stone?.color is 'black'
    
  isAlive: ->
    not @dead
    
  color: (c=false) ->
    if c 
      @stone?.color is c
    else
      @stone?.color or 'empty'
    
  oppositeColor: ->
    return 'empty' unless 'stone'
    if @stone.color is 'black' then 'white' else 'black'
    
  addStone: (stone) ->
    return false unless @groupLiberties( stone.color ).length > 0
    @stone = stone
    @$el.data 'stone', @stone  
    @$el.addClass @stone.color
    
  captureStone: ->
    @removeStone() 
    
  removeStone: ->
    return unless @stone
    c = @color()
    @stone = false
    @$el.data 'stone', @stone
    @$el.removeClass c
    
  neighbors: ->
    cell for cell in @neighborCells() when cell isnt undefined
      
  neighborCells: ->
    [
      @board.cells[@x-1]?[@y]
    ,
      @board.cells[@x]?[@y+1]
    ,
      @board.cells[@x+1]?[@y]
    ,
      @board.cells[@x]?[@y-1]            
    ]

  liberties: (locked_flag=false) ->
    cell for cell in @neighbors() when cell.isEmpty() and cell.isLocked() is locked_flag

  lockLiberties: ->
    cell.lock() for cell in @liberties()
      
  unLockLiberties: ->
    cell.unLock() for cell in @liberties(true)
      
  scoreArea: ->
    s = @areaSummary()
    happy = ( s.stones.indexOf('black') is -1 or s.stones.indexOf('white') is -1 )
    if happy
      cell.$el.addClass("counted-#{s.stones[0]}") for cell in s.cells
    
  areaSummary: ->
    stones = []
    cells = [ @ ]
    @lock()
    for cell in @neighbors() when cell.isEmpty() and cell.isUnlocked()
      summary = cell.areaSummary()
      stones = stones.concat summary.stones
      cells = cells.concat summary.cells
    for cell in @neighbors() when not cell.isEmpty() and cell.isUnlocked() 
      if cell.isAlive()
        stones.push cell.color()
      else
        stones.push cell.oppositeColor()
    { 
      stones: stones
      cells: cells
    }
      
  opponentGroupCaptures: (color) ->
    captures = []
    for cell in @neighbors() when not cell.isEmpty() and cell.color() isnt color
      @lock()
      l = cell.groupLiberties().length
      cell.groupUnlock()
      if l == 0 
        captures = captures.concat cell.captureGroup()
      @unLock()
    captures
      
  captureGroup: ->
    captures = [ @stone ]
    color = @color()
    @captureStone()
    captures = captures.concat( cell.captureGroup() ) for cell in @neighbors() when cell.color(color)
    captures
    
  markAlive: ->
    return if @isEmpty()
    @dead = false
    @$el.removeClass 'dead'
    cell.markAlive() for cell in @neighbors() when cell.color(@color()) and cell.dead
      
  markDead: ->
    return if @isEmpty()
    @dead = true
    @$el.addClass 'dead'
    cell.markDead() for cell in @neighbors() when cell.color(@color()) and not cell.dead
    
  groupLiberties: (color=@color()) ->
    return [] if @isLocked()
    @lock()
    l = @liberties()
    @lockLiberties()
    l = l.concat( cell.groupLiberties(color) ) for cell in @neighbors() when cell.color(color) and cell.isUnlocked()
    @groupUnlock(color) if @isEmpty()
    l
    
  groupUnlock: (color=@color()) ->
    @unLock()
    @unLockLiberties()
    cell.groupUnlock(color) for cell in @neighbors() when cell.color(color) and cell.isLocked()
      
  lock: ->
    @locked = true
    
  unLock: ->
    @locked = false
    
  isLocked: ->
    @locked 
    
  isUnlocked: ->
    not @locked
    
class GoStone
  constructor: (game,x,y,color,pass=false) ->
    @game = game
    @x = x
    @y = y
    @color = color
    @pass = pass

class MoveBranch
  constructor: (game,parent=false,stone=false,captures=false,state=false) ->
    @game = game
    @parent = parent
    @stone = stone
    @captures = captures
    @state = state
    @current_move = true
    @active = true
    @move_branches = []
  
  addMove: (stone,captures,state) ->
    @activeBranch()?.deactivate()
    for branch in @move_branches
      if branch.state is state
        branch.active = true
        branch.activateDefault()
        branch.current_move = true   
    
    if not @activeBranch()
      m = new MoveBranch @game, @, stone, captures, state
      @move_branches.push m
    @current_move = false
    
  deactivate: ->
    @active = false
    @activeBranch()?.deactivate()
    
  activateDefault: ->
    if @move_branches.length > 0
      @move_branches[0].active = true
    @activeBranch()?.activateDefault()
    
  currentMove: ->
    if @current_move then @ else @activeBranch()?.currentMove()
    
  activeBranch: ->
    ( move_branch for move_branch in @move_branches when move_branch.active )[0]
    
  parentArray: ->
    if @parent
      [ @parent ].concat @parent.parentArray()
    else
      []
      
  activeArray: ->
    if @current_move 
      [ @ ] 
    else if @stone
      [ @ ].concat @activeBranch()?.activeArray()
    else
      @activeBranch()?.activeArray()
      
  stateArray: ->
    move.state for move in @activeArray()
    
  nextStone: ->
    if @current_move
      @activeBranch()?.stone
    else
      @currentMove().nextStone()
      
  forward: ->
    if @current_move
      @current_move = false
      @activeBranch().current_move = true
      @activeBranch().stone
    else
      @currentMove().forward()
      
  back: ->
    if @current_move
      return unless @parent
      @current_move = false
      @parent.current_move = true
      {
        stone: @stone
        captures: @captures
      }
    else 
      @currentMove().back()
    
class GoPlayers
  constructor: (id, game) ->
    @$el = $ "#{id} .goPlayers"
    @game = game
    @captures = 
      black: 0
      white: 0
    @player_score =
      black: 0
      white: 0
      
    @drawStats()
    @$el.find('.pass').on 'click', @doPass
    
  score: (player) ->
    @captures[ if player is 'white' then 'black' else 'white' ] + @player_score[player]
    
  addCaptures: (captures) ->
    @captures[stone.color]+=1 for stone in captures
    @drawStats()
    
  freeCaptures: (captures) ->
    @captures[stone.color]-=1 for stone in captures
    @drawStats()
    
  drawStats: ->
    @$el.find(".stats.#{color} .captures").text @score(color) for color in ['black','white']

  doPass: (e) =>
    c = if $(e.currentTarget).parent().hasClass('black') then 'black' else 'white'
    return if @game.nextColor() isnt c
    @game.doPass(c)
    @game.tree_view.render()  
    
class GoControls
  constructor: (id,game) ->
    @game = game
    @$el = $ "#{id} .goControls"
    @registerEvents()
    
  registerEvents: ->
    @$el.find('.forward').on 'click', @forwardClicked
    @$el.find('.back').on 'click', @backClicked
       
   forwardClicked: =>
     @game.goForward()
     @game.tree_view.render()
        
   backClicked: =>
     @game.goBack()
     @game.tree_view.render()
          
   playClicked: =>
     #donothing
            
class TreeView
  constructor: (id, game) ->
    @$el = $ "#{id} .tree"
    @game = game
   
    
  render: ->
    @$el.html @renderTree(@game.move_tree)
    @renderLines()
    @$el.find('.stone').on 'click', @clicked
      
  renderLines: ->
    for stone in @$el.find('.stone')
      for dest in  $(stone).parent().children('.branches').children('.branch').children('.stone')
        @drawLine(stone,dest)
        
  drawLine: (stone,dest) ->
    
    st = stone.offsetTop
    sl = stone.offsetLeft
    et = dest.offsetTop
    el = dest.offsetLeft
    active = $(dest).data('branch').active
    
    a = et-st
    b = el-sl
    as = Math.pow( a, 2 ) 
    bs = Math.pow( b, 2 ) 
    c = Math.sqrt( as+bs )
    d = Math.atan2(a,b) * 180 / Math.PI
    
    @$el.append $('<div>').addClass('line').toggleClass('active',active).css
      width: "#{c}px"
      top: st+9
      left: sl+8
      transform: "rotate(#{d}deg)"
      'transform-origin': "0 0"
      
  clicked: (e) =>
    branch = $(e.currentTarget).data('branch')
    if branch.active
      while not branch.currentMove()
        @game.goForward()
      while not branch.current_move
        @game.goBack()
    else
      moves = [ branch ]
      while moves[0].active is false
        moves.unshift moves[0].parent
      
      current = moves.shift()
      
      if current.parentArray().length < @game.move_tree.currentMove().parentArray().length
        while not current.current_move
          @game.goBack()
      else
        while not current.current_move
          @game.goForward()

      current.activeBranch().deactivate()
      move.active = true for move in moves
      while not branch.currentMove()
        @game.goForward() 
      branch.activateDefault()
    @render()
    
  renderTree: (tree) ->        
    $b = $('<div>').addClass('branch')
    $b.append @renderNode tree
    $bs = $('<div>').addClass('branches')
    for branch in tree.move_branches
      $bs.append @renderTree branch     
    $b.append $bs
    
  renderNode: (b) ->
    $("<div>").addClass('stone').addClass( "#{ b.stone.color or 'start' }" ).toggleClass( 'current', b.current_move ).data('branch',b)
    
class GoGame
  constructor: (id) ->
    @board = new GoBoard id, @
    @move_tree = new MoveBranch @
    @players = new GoPlayers id, @
    @controls = new GoControls id, @
    @tree_view = new TreeView id, @
    @tree_view.render()
    @scoring = false
    
  handleClick: (x,y) ->
    if not @scoring
      return unless @board.isEmpty(x,y) 
      @addStone new GoStone @, x, y, @nextColor()
      @tree_view.render()
    if @scoring
      c = @board.cells[x][y]
      if c.dead
        c.markAlive()
      else
        c.markDead()
      @board.score()
    
    
  addStone: (stone) -> 
    if ret = @board.addStone stone
      @players.addCaptures ret.captures
      @move_tree.currentMove().addMove stone, ret.captures, ret.state
      @board.updateColor()

  doPass: (color) ->
    stone = new GoStone @, false, false, color, true
    @players.addCaptures [ stone ]
    doscore = @move_tree.currentMove().stone.pass
    @move_tree.currentMove().addMove stone, [ stone ], ''
    @board.updateColor()
    @startScoring() if doscore
    
  nextColor: ->
    if @currentColor() is 'black' then 'white' else 'black'
      
  currentColor: ->
    @move_tree.currentMove().stone.color or 'white'

  goForward: ->
    stone = @move_tree.nextStone()
    if stone
      if not stone.pass
        ret = @board.addStone stone
        @players.addCaptures ret.captures
      else
        @players.addCaptures [ stone ]
      @move_tree.forward()
      @board.updateColor()
      
  goBack: ->
    undos = @move_tree.back()
    if undos
      @board.removeStone(undos.stone)
      @board.freeCaptures undos.captures
      @players.freeCaptures undos.captures
      @board.updateColor()

  startScoring: ->
    @scoring = true
    @board.score()
    
new GoGame '#board19'
new GoGame '#board13'
new GoGame '#board9'
