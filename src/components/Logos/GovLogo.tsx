import government from "../../assets/hkoma.png";
interface Iprops {
  width: string;
  height?: string;
}

export default function GovLogo({ width, height }: Iprops) {
  return (
    <img
      src={government}
      alt={"Government Logo"}
      width={width}
      height={height}
    />
  );
}
