import logo from "../../assets/logoText.png";
interface Iprops {
  width: string;
  height?: string;
}

export default function MinstryText({ width, height }: Iprops) {
  return (
    <img
      src={logo}
      alt={"Ministry of civil service"}
      width={width}
      height={height}
    />
  );
}
