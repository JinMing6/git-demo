// import { version } from "../package.json";
// export function getVersion() {
// 	return version;
// }

export default function () {
	import("./foo").then(({ default: foo }) => console.log(foo));
}
