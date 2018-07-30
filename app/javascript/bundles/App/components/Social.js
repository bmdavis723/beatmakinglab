import React, { Component } from 'react';
import { } from 'react-materialize';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';

class Social extends Component {
    render() {
      return (
        <div class="social">
        <h3 class="headerText">SOCIAL MEDIA</h3>

        <div class="twitter">
            <TwitterTimelineEmbed
sourceType="profile"
screenName="beatmakinglab"
options={{height: 500, width: 400}}
/>
</div>

<div class="instagram">
  <InstagramEmbed
  url='https://www.instagram.com/p/BfRCkATFq4n/?hl=en'
  maxWidth={500}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
</div>

        </div>
      );
    }
  }

  export default Social;
