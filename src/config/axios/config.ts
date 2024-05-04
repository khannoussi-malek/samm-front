import Axios from "axios";
import { AUTH_TOKEN_KEY } from "../../pages/Auth/AuthContext";

Axios.interceptors.request.use((config) => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY) || null;
    if (!!token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    if(!!config.headers?.isIssat) {
        config.headers.Authorization = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTBiMjc4NzdhNmMzOWQ3YTUzNTA4NTZjNTg3NGQzNzMyMjkzZjg2YzgyYTJiMzA2MWQwZGI0NzcyZTNmZGMyMWI4YTNmM2MzYzBiYTBjNjkiLCJpYXQiOjE2OTYwNjc5OTAuOTQ4MzIxLCJuYmYiOjE2OTYwNjc5OTAuOTQ4MzI1LCJleHAiOjE3Mjc2OTAzOTAuOTQ0NzEsInN1YiI6IjExMzA4Iiwic2NvcGVzIjpbXX0.Qk1gToQzOyQJBAZiXS8WIZ2sFwz8qi8Q3YkhakEry9VPWY_B-t1FQfvgqSLZsVh8fprvRJrk3XvDVO0cBoLUE0HrEbfNO0ER-OYrITWco9HfoIUmSJVNcHfYgpcBciW94blJ_kuC62hp508BVvAKEjoD-jKpUjNg1m03lfl-VLVT2tlr-gizIAKbE9jYVda0HK_a3AJUFF5GK-LUigAkfSSRm6vpV3bfUOYLuHlyo5V5dbhKrZfpePICw7tNzVTbdwKcrH-19wkiTUske1E7ZzGEex1mFFW-ViRF6IXS-zdOPhy2uBdMiAeM-xpZmipb4KovAt8Y3KPr94w_1uGfboJDEf5opy2fGFblkE_Nhcj03VLbIjZiLKOLxATIW1F8Lcw_1HcWtCBjACVhZz79goOK_ZOT7PeOEB6ZBWr5Sc6PzW9HyJWSUyNoP5HEoxE8sYQMrd6r4MzcJ9Zvpmoe_W5RI0GA5FKsYMNKTfB79L2A0C5u8wbxEKUiOYV4EO42naENGP7NItgZ9ZjHoEZrKej0lhiBmuIgPYfRcGd2bR0ZivdgtASuSiCQVxv312TbSvoRYsBljQwLX-Y0SnXo1hQZI2TDPmxjWhIO6OoCl0Ux0maAnx1pYHGuPUphHInIw73wkYCPkvGZ9aTjp76mCS2n-wjWe6oXo40aedn8dc4";

    }
    config.baseURL = import.meta.env.VITE_BACKEND_API_URL;
    return config;
}, (error) => Promise.reject(error));