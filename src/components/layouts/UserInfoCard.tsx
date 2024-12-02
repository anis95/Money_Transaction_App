import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';

import Styles from 'config/Styles';
import { userInformation } from 'types/senMoney';

interface UserProfileCardProps {
  user: userInformation;
  avatarSize?: number;
  showInformation?: boolean;
  style?: object;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  avatarSize = 70,
  showInformation = true,
  style = {},
}) => {
  /**
   * Function to format the phone number like '51****45'
   * @param {string} phone
   * @returns {string}
   */
  const formatPhoneNumber = (phone: string): string => {
    const firstPart = phone.slice(0, 2);
    const lastPart = phone.slice(-2);
    return `${firstPart}*** *${lastPart}`;
  };

  return (
    <View style={Styles.centeredItem}>
      <View style={[Styles.rowCenter, { borderRadius: 10 }, style]}>
        <Avatar.Image
          size={avatarSize}
          source={{ uri: user.imageUri }}
          style={{ overflow: 'hidden' }}
        />
        {showInformation && (
          <View style={Styles.ml10}>
            <Text style={[Styles.mediumBoldText, Styles.mb5]}>
              {user?.name}
            </Text>
            <Text style={[Styles.mediumRegularText, { color: '#505253' }]}>
              {formatPhoneNumber(user?.phone)}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

/**
 * Export default user profile card
 */
export default UserProfileCard;
