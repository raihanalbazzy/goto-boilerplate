import dynamic from "next/dynamic";

const DynamicHomePage = dynamic(() => import("."));

export default DynamicHomePage;
