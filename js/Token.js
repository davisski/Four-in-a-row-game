class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
  }
  /**
   * @method {drawHTMLToken} - Draws new HTML token.
   */
  drawHTMLToken() {
    const div = document.createElement("div");
    div.setAttribute("id", this.id);
    div.setAttribute("class", "token");
    div.style.backgroundColor = this.owner.color;

    document.querySelector("#game-board-underlay").appendChild(div);
  }
  get htmlToken() {
    return this.drawHTMLToken();
  }
}
