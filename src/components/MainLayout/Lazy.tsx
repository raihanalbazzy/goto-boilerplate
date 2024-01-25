import dynamic from "next/dynamic";

const DynamicMainLayout = dynamic(() => import("."));

export default DynamicMainLayout;
