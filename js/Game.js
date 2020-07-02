class Game {
  constructor() {
    this.ready = false;
    this.board = new Board();
    this.players = this.createPlayer();
  }
  /**
   * @method {createPlayer} - Creates two player objects
   * @return  {Array}    An array of two Player objects.
   */

  createPlayer() {
    let players = [
      new Player(1, "Player 1", "#e15258", true),
      new Player(2, "Player 2", "#e59a13"),
    ];

    return players;
  }
  /**
   * Branches code, depending on what key player presses
   * @param   {Object}    e - Keydown event object
   */

  handleKeydown(e) {
    if (this.ready) {
      if (e.key === "ArrowLeft") {
        //move left
      } else if (e.key === "ArrowRight") {
        //move right
      } else if (e.key === "ArrowDown") {
        //play token
      }
    }
  }

  /**
   * @method {startGame} - Initializes game.
   */
  startGame() {
    this.ready = true;
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.handleKeydown();
  }

  /**
   * @method - Returns active player.
   * @return {Object} player - The active player.
   */
  get activePlayer() {
    return this.players.find((player) => player.active);
  }
}
