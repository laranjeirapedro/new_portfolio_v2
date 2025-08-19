import type { NextConfig } from "next";

const nextConfig: NextConfig = {};
const { withContentlayer } = require("next-contentlayer");
module.exports = withContentlayer({});


export default withContentlayer(nextConfig);
