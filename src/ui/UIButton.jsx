// Import dependencies
import styled, { css } from 'styled-components';

// Button styles
const StyledButton = styled.button.withConfig({
    shouldForwardProp: (prop) =>
        !['hoverBgColor', 'activeBgColor', 'padding', 'fontSize', 'borderRadius', 'variant', 'bgColor', 'textColor'].includes(prop),


})`
  
  display: inline-block;
  padding: ${(props) => props.padding || '10px 20px'};
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: 600;
  color: ${(props) => props.textColor || '#ffffff'};
  background: ${(props) => props.bgColor || '#007BFF'};
  border: none;
  border-radius: ${(props) => props.borderRadius || '8px'};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${(props) => props.hoverBgColor || '#0056b3'};
    transform: translateY(-2px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background: ${(props) => props.activeBgColor || '#00408f'};
    transform: translateY(0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  ${(props) =>
    props.variant === 'outline' &&
    css`
      background: transparent;
      border: 2px solid ${props.bgColor || '#007BFF'};
      color: ${props.bgColor || '#007BFF'};

      &:hover {
        background: ${props.bgColor || '#007BFF'};
        color: #ffffff;
      }
    `}

  ${(props) =>
    props.variant === 'text' &&
    css`
      background: transparent;
      color: ${props.bgColor || '#007BFF'};
      box-shadow: none;

      &:hover {
        background: rgba(0, 123, 255, 0.1);
      }
    `}
`;

// Button component
const UIButton = ({
                  type="button",
                  children,
                  onClick,
                  bgColor,
                  textColor,
                  hoverBgColor,
                  activeBgColor,
                  padding,
                  fontSize,
                  borderRadius,
                  variant,
                  ...rest
                }) => {
  return (
      <StyledButton
          type={type}
          onClick={onClick}
          bgColor={bgColor}
          textColor={textColor}
          hoverBgColor={hoverBgColor}
          activeBgColor={activeBgColor}
          padding={padding}
          fontSize={fontSize}
          borderRadius={borderRadius}
          variant={variant}
          {...rest}
      >
        {children}
      </StyledButton>
  );
};

export default UIButton;