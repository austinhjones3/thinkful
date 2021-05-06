const LinkedList = require("./lib/linkedList");

class Editor {
  /**
   * Constructs a new Editor object with the given text.
   * Defaults to empty text. Cursor is positioned at the end of the text.
   * @param {LinkedList} text - A linked List containing the characters that are in the editor,
   * empty by default
   */
  constructor(text = new LinkedList()) {
    this.text = text;
    this.cursor = this.text.find((node, index) => index === this.text.length - 1);
  }

  /**
   * Insert a character at the cursor position of the editor.
   * @param {*} char a value to be inserted into the editor
   * @returns {Editor} a reference to this editor
   */
  insert(char) {
    if (this.cursor) {
      // console.log("char", char);
      // console.log(JSON.stringify(this, null, 2));
      this.text.insert(char, (node) => node.value === this.cursor.value);
      // console.log(JSON.stringify(this, null, 2));
    } else {
      this.text.insertAtHead(char);
    }

    // if (!this.cursor) {
    //   console.log(this);
    //   this.text.insertAtHead(char);
    // }
    this.arrowRight();

    return this;
  }

  /**
   * Remove the character at the cursor position.
   * Moves the cursor to the previous position.
   * If editor is empty does nothing.
   * @returns {Editor} a reference to this editor
   */
  delete() {
    if (this.cursor && this.text.head) {
      /**
       * not completely understanding why arrowLeft() wasn't good enough
       * for this but I do understand why this current solution is working
       */
      const previous = this.text.findWithPrevious(
        (node) => this.cursor.value === node.value
      )[1];
      this.text.remove((node) => node.value === this.cursor.value);
      this.cursor = previous;
    }
    return this;
  }

  /**
   * Moves the cursor one position to the left.
   * If the cursor is at the start of the editor nothing happens.
   * @returns {Editor} a reference to this editor
   */
  arrowLeft() {
    if (this.text.head && this.cursor) {
      const previous = this.text.findWithPrevious((node) => {
        return this.cursor.value === node.value;
      })[1];
      console.log(previous);
      this.cursor = previous;
    }
    return this;
  }

  /**
   * Moves the cursor one position to the right.
   * If the cursor is at the end of the editor nothing happens.
   * @returns {Editor} a reference to this editor
   */
  arrowRight() {
    if (this.text && this.cursor) {
      return this.cursor.next ? (this.cursor = this.cursor.next) : this;
    } else {
      return (this.cursor = this.text.head);
    }
  }
}

module.exports = Editor;
