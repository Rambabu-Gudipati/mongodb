import axios, { AxiosRequestConfig } from "axios";

const UPLEAD_BASE_URL = "https://api.uplead.com/v2";

export const searchByDomain = async (domainName: string): Promise<any> => {
	const config: AxiosRequestConfig<any> = {
		method: "get",
		url: `${UPLEAD_BASE_URL}/company-search?domain=${domainName}`,
		headers: {
			Authorization: process.env.UPLEAD_API_KEY || "",
		},
	};

	return axios(config)
		.then((res:any) => {
			return res.data.data;
		})
		.catch((err:any) => {
			console.log(err);
		});
};
