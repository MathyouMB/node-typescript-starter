class Resource {
  id: string;
  createdAt: Date;
  data: any;

  constructor({
    id,
    createdAt,
    data,
  }: {
    id: string;
    createdAt: Date;
    data: any;
  }) {
    this.id = id;
    this.createdAt = createdAt;
    this.data = data;
  }
}

export default Resource;
