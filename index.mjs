// import http from "http";
// function handleServer(request, response) {
// 	response.end(
// 		JSON.stringify({
// 			time: new Date(),
// 		})
// 	);
// }

// const server = http.createServer(handleServer);

// server.listen(8080, () => {
// 	console.log(`Server running at http://localhost:8080`);
// });

export default {
	workOrderId: "",
	workOrderSystemNo: "",
	factoryCode: "20220311-1",
	workOrderNo: "qweqwr",
	customerCode: "MOMO",
	customerName: "MOMOCHA",
	workOrderFinishDate: "2022-04-13",
	workOrderOrderNo: "qwrqwe",
	workOrderType: "N",
	workOrderStandard: "Y",
	payMethod: "0",
	workOrderMemo: "qwer",
	containerType: "1",
	cteu: "1",
	productionLine: "0",
	boxRanges: [
		{
			boxRangeQuantities: [
				{
					_index: 0,
					containerFinishDate: "2022-04-13",
					containerFinishQuantity: 1,
				},
			],
			containerQuantity: 11,
			containerBoxType: "RH",
			containerEndNo: "123133",
			containerInitial: "ZZZZ",
			containerSize: 60,
			containerStartNo: "123123",
			payNumber: "3",
			_index: 0,
			containerRangeNo: "",
			iso: "60RH",
		},
	],
};
