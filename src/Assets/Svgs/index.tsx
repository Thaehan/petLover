import React from 'react';
import {ColorValue} from 'react-native';

import Calendar from '@Assets/Svgs/Calendar.svg';
import Account from '@Assets/Svgs/Account.svg';
import Notification from '@Assets/Svgs/Notification.svg';
import RatingStarOff from '@Assets/Svgs/RatingStarOff.svg';
import RatingStarOn from '@Assets/Svgs/RatingStarOn.svg';
import EnterMeetingCode from '@Assets/Svgs/EnterMeetingCode.svg';
import StartMeeting from '@Assets/Svgs/StartMeeting.svg';
import Password from '@Assets/Svgs/Password.svg';
import Username from '@Assets/Svgs/Username.svg';
import Options from '@Assets/Svgs/Options.svg';

export type TSvg = {
  height?: number;
  width?: number;
  color?: ColorValue;
  isOn?: boolean;
};

const Svgs = {
  Options: ({color = 'white', width = 44, height = 44}: TSvg) => {
    return <Options color={color} height={height} width={width} />;
  },

  EnterMeetingCode: ({color = '#C1B6BA', width = 48, height = 48}: TSvg) => {
    return <EnterMeetingCode color={color} height={height} width={width} />;
  },

  StartMeeting: ({color = '#C1B6BA', width = 48, height = 48}: TSvg) => {
    return <StartMeeting color={color} height={height} width={width} />;
  },

  AccountBottomIcon: ({color = '#C1B6BA', width = 24, height = 24}: TSvg) => {
    return <Account color={color} height={height} width={width} />;
  },

  Username: ({color = '#C1B6BA', width = 24, height = 24}: TSvg) => {
    return <Username color={color} height={height} width={width} />;
  },

  Password: ({color = '#C1B6BA', width = 24, height = 24}: TSvg) => {
    return <Password color={color} height={height} width={width} />;
  },

  NotificationBottomIcon: ({
    color = '#C1B6BA',
    width = 24,
    height = 24,
  }: TSvg) => {
    return <Notification color={color} height={height} width={width} />;
  },

  CalendarBottomIcon: ({color = '#C1B6BA', width = 24, height = 24}: TSvg) => {
    return <Calendar color={color} height={height} width={width} />;
  },

  RatingStar: ({width = 64, height = 64, isOn = false}: TSvg) => {
    if (isOn) {
      return <RatingStarOn height={height} width={width} />;
    }

    return <RatingStarOff height={height} width={width} />;
  },
};

export default Svgs;
