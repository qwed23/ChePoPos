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
    const x = this.state.rss.map(item => (
        item.title
    ));
    return <React.Fragment> {x}</React.Fragment>;
  }

  componentDidMount() {
    const parseUrl = "https://api.rss2json.com/v1/api.json?rss_url=";
    const rssUrl = "http://www.ynet.co.il/Integration/StoryRss3082.xml";
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
