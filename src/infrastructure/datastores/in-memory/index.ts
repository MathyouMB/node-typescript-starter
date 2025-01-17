import Resource from "../../../app/models/Resource";
import { Datastore } from "../index";

interface ResourceData {
  id: string;
  createdAt: Date;
  data: any;
}

class InMemoryStore implements Datastore {
  private resources: Map<string, ResourceData> = new Map();

  getResource = (id: string): Resource => {
    throw new Error("Method not implemented.");
  };

  deleteResource = (id: string): Resource => {
    throw new Error("Method not implemented.");
  };

  createResource = (data: any): Resource => {
    const id = Math.random().toString(36).substr(2, 9);
    const createdAt = new Date();
    const resourceData: ResourceData = {
      id: id,
      createdAt: createdAt,
      data: data,
    };

    this.resources.set(id, resourceData);

    return this.transformRawData(resourceData);
  };

  private transformRawData = (data: ResourceData): Resource => {
    return new Resource({
      id: data.id,
      createdAt: data.createdAt,
      data: data.data,
    });
  };
}

export default InMemoryStore;
