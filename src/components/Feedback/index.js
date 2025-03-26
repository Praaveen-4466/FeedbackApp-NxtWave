import React, { Component } from "react";

import "./index.css";

class Feedback extends Component {
  state = { isFeedbackSelected: false };

  onCLickedEmoji = () => {
    this.setState({ isFeedbackSelected: true });
  };

  renderFeedbackQuestion() {
    const { resources } = this.props;
    const { emojis } = resources;

    return (
      <div className="bg-container">
        <h1 className="heading">How satisfied are ou with our performance</h1>
        <ul className="emojis-list">
          {emojis.map((emoji) => (
            <li key={emoji.id}>
              <button
                className="button"
                type="button"
                onClick={this.onCLickedEmoji}
              >
                <img src={emoji.imageUrl} className="img1" alt={emoji.name} />
                <br />
                <span className="para">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  renderThanksScreen = () => {
    const { resources } = this.props;
    const { loveEmojiUrl } = resources;

    return (
      <div className="thanks-container">
        <img src={loveEmojiUrl} className="img2" alt="Love Emoji" />
        <h1 className="heading">Thank You</h1>
        <p className="para">
          We will use your Feedback to improve our customer service
        </p>
      </div>
    );
  };

  render() {
    const { isFeedbackSelected } = this.state;
    return (
      <div className="bg-container">
        <div className="card">
          {isFeedbackSelected
            ? this.renderThanksScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    );
  }
}

export default Feedback;
