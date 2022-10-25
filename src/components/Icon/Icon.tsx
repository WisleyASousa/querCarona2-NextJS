import { BaseComponent } from "@src/theme/BaseComponent";
import * as icons from './svgs/_index'; //pegando tudo que tem la dentro

interface IconProps {
  name: string;
}


export default function Icon({ name, ...props }: IconProps) {
  const CurrentIcon = icons[name];
 
  return (
      <BaseComponent
        as="svg"
        styleSheet={{
          width: "12px",
          height: "14px",
        }}
        color="inherit"
        fill="currentColor"
        viewBox="0 0 14 16"
        xmlns="http://www.w3.org/2000/svg"
        {...props}

      >

        <CurrentIcon />
      </BaseComponent>
    )
}
Icon.defaultProps = {
  name:'default_icon',
}