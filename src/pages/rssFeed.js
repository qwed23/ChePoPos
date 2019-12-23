import React from "react";

class RSSFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rss: []
    };
    this.setRss = this.setRss.bind(this);
  }
  setRss(json) {
    this.setState({
      rss: json.items
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.rss.map(item => (
          <div key={item.guid}>
            {item.title}
            {/* <iframe src={item.link}> </iframe> */}
            {item.description}
            {item.guid}
          </div>
        ))}
      </React.Fragment>
    );
  }

  componentDidMount() {
    const parseUrl = "https://api.rss2json.com/v1/api.json?rss_url=";
    const rssUrl = "https://www.one.co.il/cat/coop/xml/rss/newsfeed.aspx";
    fetch(parseUrl + rssUrl)
      .then(response => response.json())
      .then(json => {
        if (json.status === "ok") {
          this.setRss(json);
        } else {
          console.log("failed");
        }
      });
  }
}

export default RSSFeed;
