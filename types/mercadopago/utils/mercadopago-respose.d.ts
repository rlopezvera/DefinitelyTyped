import { CallbackFunction } from '../shared/types';

export interface ExecOptions<K, P> {
  schema: any;
  base_url: string;
  path: string;
  method: string;
  /** Configurations object */
  config: K;
  /** Payload to send */
  payload: P;
  /** If needs the idempotency header */
  idempotency: boolean;
  access_token: string;
  platformId: string;
  corporationId: string;
  integratorId: string;
}

export interface Pagination {
  total: number;
  limit: number;
  offset: number;
}

export type Item = {
  title: string;
  description: string;
  currency_id: string;
  quantity: number;
  unit_price: number;
};

export type Payer = {
  phone: Record<string, never>;
  identification: Record<string, never>;
  address: Record<string, never>;
};

export type PaymentMethod = {
  excluded_payment_methods: Record<string, never>[];
  excluded_payment_types: Record<string, never>[];
};

export type Shipment = {
  receiver_address: Record<string, never>;
};

export class MercadoPagoResponse<K> {
  body: {
    collector_id: number;
    items: Item[];
    payer: Payer;
    back_urls: Record<string, never>;
    payment_methods: PaymentMethod;
    client_id: number;
    marketplace: string;
    marketplace_fee: number;
    shipments: Shipment;
    statement_descriptor: string;
    date_created: string;
    id: string;
    init_point: string;
    sandbox_init_point: string;
    metadata: Record<string, never>;
  };
  response: any;
  status: number;
  idempotency: string;
  pagination: unknown;

  /** Execute previous page request */
  prev(callback: CallbackFunction): MercadoPagoResponse<K>;

  /** Execute next page request */
  next(callback: CallbackFunction): MercadoPagoResponse<K>;

  /** Check if it has a previous page */
  hasPrev(): boolean;

  /** Check if it has a next page */
  hasNext(): boolean;

  /** Get exec options */
  getExecOptions(): K;
}

