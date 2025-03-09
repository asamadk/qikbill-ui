import axios, { AxiosInstance, AxiosResponse } from "axios";
import api from "./api";

export class CollectionAPI<T> {
  protected api: AxiosInstance;
  protected endpoint: string;

  constructor(endpoint: string) {
    this.api = api;
    this.endpoint = endpoint;
  }

  // Fetch all items with optional pagination
  async getAll(page: number = 1, limit: number = 10): Promise<T[]> {
    const response: AxiosResponse<T[]> = await this.api.get(
      `${this.endpoint}?page=${page}&limit=${limit}`
    );
    return response.data;
  }

  // Fetch a single item by ID
  async getById(id: string | number): Promise<T> {
    const response: AxiosResponse<T> = await this.api.get(`${this.endpoint}/${id}`);
    return response.data;
  }

  // Create a new item
  async create(data: Partial<T>): Promise<T> {
    const response: AxiosResponse<T> = await this.api.post(this.endpoint, data);
    return response.data;
  }

  // Update an existing item by ID
  async update(id: string | number, data: Partial<T>): Promise<T> {
    const response: AxiosResponse<T> = await this.api.put(`${this.endpoint}/${id}`, data);
    return response.data;
  }

  // Delete an item by ID
  async delete(id: string | number): Promise<void> {
    await this.api.delete(`${this.endpoint}/${id}`);
  }
}
