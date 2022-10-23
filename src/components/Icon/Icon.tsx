import { BaseComponent } from "@src/theme/BaseComponent";
import * as icons from './svgs/_index'; //pegando tudo que tem la dentro

interface IconProps {
  name: string;
}


export default function Icon({ name }: IconProps) {
  const CurrentIcon = icons[name];
 
  return (
      <BaseComponent
        as="svg"
        styleSheet={{
          width: "14px",
          height: "16px",
        }}
        color="inherit"
        fill="currentColor"
        viewBox="0 0 14 16"
        xmlns="http://www.w3.org/2000/svg"
      >

        <CurrentIcon />
      </BaseComponent>
    )
}
Icon.defaultProps = {
  name:'default_icon',
}