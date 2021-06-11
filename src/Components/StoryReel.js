import React from "react";
import Story from "./Story";
import './StoryReel.css'

const StoryReel = () => {
  return (
    <div className="storyReel">
      {/* story >> img, profilepic,title */}
      <Story
        image="https://assets.yellowtrace.com.au/wp-content/uploads/2021/06/01204751/So-Studio-Restaurant-Lunar-Shanghai-Hospitality-Design-Photo-Wen-Studio-Yellowtrace-600x400.jpg"
        profileSrc="https://i.pinimg.com/564x/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.jpg"
        title="Thinking Man"
      />
      <Story
        image="https://pbs.twimg.com/media/EVWwAoDUMAAgAL1?format=jpg&name=360x360"
        profileSrc="https://www.seekpng.com/png/full/506-5061704_cool-profile-avatar-picture-cool-picture-for-profile.png"
        title="Amazing Amie"
      />
      <Story
        image="https://cuteanimaltab.com/wp-content/uploads/2017/05/fox-friend.jpg"
        profileSrc="https://www.vippng.com/png/detail/497-4971534_product-details-cool-profile-pictures-for-twitter.png"
        title="Animal lover"
      />
    </div>
  );
};

export default StoryReel;
