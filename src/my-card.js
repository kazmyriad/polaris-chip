import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

// lit is coming from package.json - the  dependencies
// shadow root

// /**
//  * Now it's your turn. Here's what we need to try and do:
//  * 1. Get you HTML from your card working in here 
//  * 2. Get your CSS rescoped as needed to work here
//  */


export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super(); //always need this in JS
    // sets the defaults for the properties of the tags vv
    this.title = "My card";
    this.toughness = "6 / 4"
    this.cardName = "Maple, Syrup Queen"
    this.cardType = "Legendary Creature - Cat God"
    this.cardColor ="This is a blue card"
    this.description = ""
    this.image = "https://imgs.search.brave.com/IwqolXqmuCcwuQ5DcPCFHhRzTcbtWj49xsSR8uKlKBw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzVl/OGI3OWFkZDJhNzQz/MGEyYmZlNGZhZC8x/NTg2NDY4OTUxMjcz/LUdIT1RTREY3V0sx/NTYyMTJYQzhUL21h/cGxlMW1vbnRoMy5w/bmc"
    this.fancy = false; // default should always be false
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      } 
      /* Do not touch this and also comment with a star in CSS */
      
      :host([fancy]) .card{
        background-image: url(https://imgs.search.brave.com/1krg270w0UQ3WoLibkGnBm9uejWi1qHzxtZvPppN4LA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTEy/MTU5NDA4L3Bob3Rv/L2JsdWUtZGVlcC1z/ZWEtZm9hbWluZy13/YXRlci1iYWNrZ3Jv/dW5kLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1UNUpUZ3du/eWpnMXJ6T0tBVF9T/RGIzMi1tM09OQ2Rr/WkNVUm1iZTF2Zlk0/PQ);
        color: #2d29a6;
      }
            
      .card-wrapper
      {
        position: relative;
        background: #000;
        border-radius: 2%;
        padding: 10px;
        width: 430px;
        margin: 10px;
        font-family: Georgia;
      }

      .card
      {
        background-color: orange;
        background-image: url(https://imgs.search.brave.com/c50BPg4piiAGKRKqw8BwsoqHlSOa3Cog8nQ2tLuT6Qg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NTY1MDcwL3Bob3Rv/L2Fic3RyYWN0LWJh/Y2tncm91bmQtb2Yt/c3RhcnMtaW4tdGhl/LWdhbGF4eS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WS1q/d2ZncGZOcHRsWG5t/THNzVEpaYTZsd0Ix/TXM1S0g5M0RrWTFX/RVdLaz0);
        padding: 5px 23px 5px 15px;

      }

      #top
      {
        transform: translateY(6px);
        background-color: #FFFFFF;
        width: 382px;
        border-radius: 15px;
        border: 5px solid black;
        padding-left: 10px;
      }

      #manaCost
      {
        float: right;
        right: 10px;
        bottom: 33px;
        margin-right: 5px;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;    
        position: relative;
      }

      #title
      {
        font-size: 20px;
        font-weight: bold;
        transform: translateY(-3px);
      }

      #cost
      {
        border-radius: 50%;
        margin-right: 3px;
        width: 10px;
        padding-left: 5px;
        padding-right: 5px;
        background: #ccc;
        text-align: center;    
      }

      #picture
      {
        transform: translateY(-31px);
        object-fit: cover;
        border: 5px solid black;
        width: 390px;
        height: 260px;
      }

      #toughness
      {
        float: right;
        position: relative;
        bottom: 20px;
        left: 20px;
        text-align: center;
        border-radius: 15px;
        border: 3px solid black;
        width: 70px;
        padding: 5px;
        margin: auto;
        font-size: 20px;
        background-color: #bbbbbb
      }

      #header
      {
        background-color: #BBBBBB;
        font-weight: bold;
        border: 4px solid black;
        position: absolute;
        top: 333px;
        left: 16px;
        max-width: 100%;
        margin:auto;
        border-radius: 15px;
        width: 410px;
      }

      #head
      {
        padding-left: 10px;
        font-size: 17px;
      }

      #icon
      {
        position: absolute;
        max-width: 100%;
        right: 20px;
        bottom: 1px;
      }

      i
      {
        font-size: 12px;
      }

      #mana
      {
        float: right;
        right: 10px;
        bottom: 41px;
        background: #ccc;
        border-radius: 50%;
        width: 13px;
        line-height: 20px;
        text-align: left;    
        position: relative;
      }

      p
      {
        margin: 9px 0;
        padding-left: 7px;
      }

      #text
      {
        background-color: #FFFFFF;
        border: 5px solid black;
        padding: 15px 5px 5px 5px;
        width: 380px;
      }

      #flavor
      {
        font-style: italic;
      }

      #copyright{
        font-size: 10px;
        color: white;
      }
      
    `;
  }

  openChanged(e){

    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
    console.log(this.fancy)
  }


  // FOR ME: What's being shown to the user
  // <p id="title">${this.cardName.length > 15 ? this.substring(0, 14) + "..." : this.cardName}</p>

  render() {
    return html`
      <div class="card-wrapper">
        <div class="card">
          <div id="top">
            <p id="title">${this.cardName}</p>
            <p id="mana">1</p>
            </p>
          </div>
          <img src=${this.image} id="picture">
          <div class="body">
            <div id="header">
              <p id="head">${this.cardType}
              </p>
            </div>
            <div id="text">
            <details ?open="${this.fancy}" @toggle="${this.openChanged}">
              <summary>Card Color</summary> 
              <div>
                ${this.cardColor}
              </div>
            </details>
            <slot>${this.description}</slot>
            <span>_____________________________________</span>
            <p id="flavor">"What a sticky situation!"</p>
            <span id="toughness">${this.toughness}</span>  
            </div>
          </div>
        <p id="copyright">Illus. Someone at Wizards of the Coast, probably</p>
        </div>
      </div>
      `;
      //html goes here; anything coded here cannot change
  }

  // what does static get mean? Moreso the get - I think static is similar to Java static
  // name: What does colon mean? (Answered on own I think)

  static get properties() { // should match constructor components
    return {
      fancy: { type: Boolean, reflect: true }, //expects fancy to be true or false
      title: { type: String },
      image: { type: String },
      cardName: { type: String },
      cardType: { type: String },
      toughness: { type: String },
      description: { type: String },
    };
  }
  // good for APIs that can search the DOM and change specific elements
  // without these,  you can't universally update values, it'll just return the default
  // doesn't require entire page to rebuild when something is changed
}

globalThis.customElements.define(MyCard.tag, MyCard);

// ^ why globalThis, why MyCard.tag, what does define do
// whenever you see the MyCard tag , run the class MyCard

//slot tag 
