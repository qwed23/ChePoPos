import React from  'react'

const SplitFrame = (props) => props.urlArray.map(url => (
    <div style={props.warrper}>
      <iframe
        style={props.style}
        onClick={e =>
          props.isDelete
            ? props.setUrlArray(
                props.urlArray.filter(iteam => iteam !== e.target.dataset.rs)
              )
            : null
        }
        // name ="X-frame-Options"
        data-rs={url}
        title={url}
        key={url}
        src={url}
        // SameSite='sameOrigin'
      />
    </div>
  ));

  export default SplitFrame;



