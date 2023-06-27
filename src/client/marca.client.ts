
import { Marca } from "@/model/marca";
import axios, { AxiosInstance } from "axios";

 class MarcaClient {

    private axiosClient : AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8091/api/marca',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number): Promise<Marca> {
        try {
            return (await this.axiosClient.get<Marca>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
    }

    public async listaAll(): Promise<Marca[]> {
        try {
            return (await this.axiosClient.get<Marca[]>(`/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
    }

    public async cadastrar(marca: Marca): Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, marca)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
    }
    public async editar(id: number, marca: Marca): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/${id}`, marca)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
    }
    public async delete(id: number): Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
    }
}

export default new MarcaClient();