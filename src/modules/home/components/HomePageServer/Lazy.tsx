import dynamic from "next/dynamic";

const DynamicHomePageServer = dynamic(() => import("."));

export default DynamicHomePageServer;
