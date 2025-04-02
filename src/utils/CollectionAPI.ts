import axios, { type AxiosInstance, type AxiosResponse } from "axios";
import api from "./api";

export class CollectionAPI<T> {
  private baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";
  protected api: AxiosInstance;
  protected endpoint: string;

  constructor(endpoint: string) {
    this.api = api;
    this.endpoint = `${this.baseURL}${endpoint}`;
  }

  // Fetch all items with optional pagination and additional query parameters
  async getAll(page: number = 1, limit: number = 50, queryParams: { [key: string]: string | number } = {}): Promise<T> {
    const query = Object.entries(queryParams)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const response: AxiosResponse = await this.api.get(
      `${this.endpoint}?page=${page}&limit=${limit}${query ? `&${query}` : ""}`
    );
    return response.data?.data;
  }

  // Fetch a single item by ID
  async getById(id: string | number): Promise<T> {
    const response: AxiosResponse<T> = await this.api.get(`${this.endpoint}/${id}`);
    return response?.data;
  }

  // Create a new item
  async create(data: Partial<T>): Promise<T> {
    const response: AxiosResponse<T> = await this.api.post(this.endpoint, data);
    return response?.data;
  }

  // Update an existing item by ID
  async updateById(id: string | number, data: Partial<T>): Promise<T> {
    const response: AxiosResponse<T> = await this.api.put(`${this.endpoint}/${id}`, data);
    return response?.data;
  }

  // Update
  async update(data: Partial<T>): Promise<T> {
    const response: AxiosResponse<T> = await this.api.put(`${this.endpoint}`, data);
    return response?.data;
  }

  // Delete an item by ID
  async delete(id: string | number): Promise<void> {
    await this.api.delete(`${this.endpoint}/${id}`);
  }
}
