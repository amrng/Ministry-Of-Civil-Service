import logo from "../../assets/logoCivil.png";
interface Iprops {
  width: string;
  height?: string;
}

export default function MinstryLogo({ width, height }: Iprops) {
  return (
    <img
      src={logo}
      alt={"Ministry of civil service"}
      width={width}
      height={height}
    />
  );
}
