import { Veiculo } from "@/model/veiculo";
import axios, { AxiosInstance } from "axios";


class VeiculoClient{


  private axiosClient: AxiosInstance;

  constructor() {
      this.axiosClient = axios.create({
          baseURL: 'http://localhost:8091/api/veiculo',
          headers: {'Content-type' : 'application/json'}
      });
  }

  public async findById(id: number) : Promise<Veiculo> {
      try {
          return (await this.axiosClient.get<Veiculo>(`/${id}`)).data
      } catch (error:any) {
          return Promise.reject(error.response.data)
      }
  }  

  public async listaAll(): Promise<Veiculo[]> {
    try {
        return (await this.axiosClient.get<Veiculo[]>(`/lista`)).data
    } catch (error:any) {
        return Promise.reject(error.response.data)
    }
}

public async cadastrar(veiculo: Veiculo): Promise<string> {
    try {
        return (await this.axiosClient.post<string>(``, veiculo)).data
    } catch (error:any) {
        return Promise.reject(error.response.data)
    }
}
public async editar(id: number, veiculo: Veiculo): Promise<string> {
    try {
        return (await this.axiosClient.put<string>(`/${id}`, veiculo)).data
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

export default new VeiculoClient();