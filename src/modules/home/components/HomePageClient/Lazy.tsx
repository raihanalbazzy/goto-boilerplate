import dynamic from "next/dynamic";

const DynamicHomePageClient = dynamic(() => import("."));

export default DynamicHomePageClient;
