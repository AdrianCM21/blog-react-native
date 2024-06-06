import * as React from 'react';
import { Path } from 'react-native-svg';
import { IconProps, IconWrapper } from './IconWrapper';

export const Volley = (props: IconProps) => {
  const { color = '#fff', ...otherProps } = props;
  return (
    <IconWrapper {...otherProps}>
      <Path
        d="M9.39 4.969a14.445 14.445 0 0 0-2.95-3.597C2.614 3.377 0 7.378 0 12c0 1 .136 1.966.366 2.895 2.146-6.36 6.904-9.04 9.023-9.926Zm8.502 8.208c.058-.433.113-1.035.113-1.765 0-2.77-.793-7.369-5.226-11.372C12.52.023 12.262 0 12 0c-1.43 0-2.79.262-4.06.72 4.399 4.226 4.81 9.305 4.82 10.86.73.415 2.582 1.315 5.132 1.597Zm-6.637-1.622c-.047-.844-.15-2.897-1.182-5.246-1.936.797-7.242 3.614-8.823 10.997a12.034 12.034 0 0 0 3.01 3.855c1.459-5.922 5.654-8.819 6.995-9.606ZM15.305.472C18.81 4.452 19.5 8.717 19.5 11.441c0 .724-.049 1.338-.106 1.81h.025c1.385 0 2.916-.203 4.555-.75.007-.168.026-.332.026-.501C24 6.52 20.325 1.909 15.305.472Zm-3.32 12.395c-.722.426-2.431 1.577-3.952 3.65 1.235.953 4.384 2.966 8.883 2.966 1.54 0 3.236-.236 5.067-.83a11.933 11.933 0 0 0 1.815-4.522 15.695 15.695 0 0 1-4.373.635c-3.74 0-6.464-1.346-7.44-1.899ZM7.178 17.78a14.277 14.277 0 0 0-1.642 4.346C7.435 23.306 9.633 24 12 24c3.234 0 6.164-1.286 8.32-3.367-1.191.24-2.33.36-3.393.36-4.805-.002-8.232-2.145-9.75-3.213Z"
        fill={color}
      />
    </IconWrapper>
  );
};