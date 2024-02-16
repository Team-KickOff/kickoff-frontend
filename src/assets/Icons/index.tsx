import React from 'react';
import { SvgProps } from 'react-native-svg';

// import icons
import share from './share.svg';

interface IconProps extends SvgProps {
  size?: number;
  marginTop?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
}

const Icon = {
  Share: (props: IconProps) => createIcon(props, share),
};

const createIcon: React.FC = (props: IconProps, Svg: React.FC<SvgProps>) => {
  return (
    <Svg
      width={props.size ? props.width || props.size : 25}
      height={props.size ? props.height || props.size : 25}
      color={props.color ? props.color : '#000'}
      {...props}
    />
  );
};

export default Icon;
