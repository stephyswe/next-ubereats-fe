import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Category = {
  __typename?: 'Category';
  countRestaurants: Scalars['Int'];
  coverImg?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  name: Scalars['String'];
  restaurants?: Maybe<Array<Restaurant>>;
  slug: Scalars['String'];
};

export type CategoryInput = {
  page?: InputMaybe<Scalars['Int']>;
  slug: Scalars['String'];
};

export type CategoryOutput = {
  __typename?: 'CategoryOutput';
  category?: Maybe<Category>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  restaurants?: Maybe<Array<Restaurant>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type CreateAccountInput = {
  data: CreateAccountInputType;
};

export type CreateAccountInputType = {
  email: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
};

export type CreateAccountOutput = {
  __typename?: 'CreateAccountOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateDishInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  options?: InputMaybe<Array<DishOptionInputType>>;
  photo?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  restaurantId: Scalars['Int'];
  type?: InputMaybe<Scalars['String']>;
};

export type CreateDishOutput = {
  __typename?: 'CreateDishOutput';
  dish: Dish;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateOrderInput = {
  items: Array<CreateOrderItemInput>;
  restaurantId: Scalars['Int'];
};

export type CreateOrderItemInput = {
  dishId: Scalars['Int'];
  options?: InputMaybe<Array<OrderItemOptionInputType>>;
};

export type CreateOrderOutput = {
  __typename?: 'CreateOrderOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  orderId: Scalars['Int'];
};

export type CreatePaymentInput = {
  restaurantId: Scalars['Int'];
  transactionId: Scalars['String'];
};

export type CreatePaymentOutput = {
  __typename?: 'CreatePaymentOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateRestaurantInput = {
  address: Scalars['String'];
  categoryName: Scalars['String'];
  coverImg?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateRestaurantOutput = {
  __typename?: 'CreateRestaurantOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  restaurantId: Scalars['Int'];
};

export type DeleteDishInput = {
  dishId: Scalars['Int'];
};

export type DeleteDishOutput = {
  __typename?: 'DeleteDishOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteRestaurantInput = {
  restaurantId: Scalars['Float'];
};

export type DeleteRestaurantOutput = {
  __typename?: 'DeleteRestaurantOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Dish = {
  __typename?: 'Dish';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  name: Scalars['String'];
  options?: Maybe<Array<DishOption>>;
  photo?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  restaurant?: Maybe<Restaurant>;
  type?: Maybe<Scalars['String']>;
};

export type DishChoice = {
  __typename?: 'DishChoice';
  extra?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type DishChoiceInputType = {
  extra?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type DishOption = {
  __typename?: 'DishOption';
  choices?: Maybe<Array<DishChoice>>;
  extra?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type DishOptionInputType = {
  choices?: InputMaybe<Array<DishChoiceInputType>>;
  extra?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type EditDishInput = {
  description?: InputMaybe<Scalars['String']>;
  dishId: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Array<DishOptionInputType>>;
  photo?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
};

export type EditDishOutput = {
  __typename?: 'EditDishOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditProfileInputArgs = {
  email: Scalars['String'];
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type EditProfileOutput = {
  __typename?: 'EditProfileOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type FindManyCategoriesOutput = {
  __typename?: 'FindManyCategoriesOutput';
  categories?: Maybe<Array<Category>>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type FindManyDishesOutput = {
  __typename?: 'FindManyDishesOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results: Array<Dish>;
};

export type FindManyOrdersInput = {
  status?: InputMaybe<OrderStatus>;
};

export type FindManyOrdersOutput = {
  __typename?: 'FindManyOrdersOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  orders?: Maybe<Array<Order>>;
};

export type FindManyPaymentOutput = {
  __typename?: 'FindManyPaymentOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  payments?: Maybe<Array<Payment>>;
};

export type FindOrderInput = {
  id: Scalars['Float'];
};

export type FindOrderOutput = {
  __typename?: 'FindOrderOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  order?: Maybe<Order>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: CreateAccountOutput;
  createDish: CreateDishOutput;
  createOrder: CreateOrderOutput;
  createPayment: CreatePaymentOutput;
  createRestaurant: CreateRestaurantOutput;
  deleteDish: DeleteDishOutput;
  deleteRestaurant: DeleteRestaurantOutput;
  editProfile: EditProfileOutput;
  login: LoginOutput;
  updateDish: EditDishOutput;
  updateOrder: UpdateOrderOutput;
  updateOrderDriver: TakeOrderOutput;
  updateRestaurant: UpdateRestaurantOutput;
  verifyEmail: VerifyEmailOutput;
};

export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};

export type MutationCreateDishArgs = {
  input: CreateDishInput;
};

export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};

export type MutationCreatePaymentArgs = {
  input: CreatePaymentInput;
};

export type MutationCreateRestaurantArgs = {
  createRestaurantDto: CreateRestaurantInput;
};

export type MutationDeleteDishArgs = {
  input: DeleteDishInput;
};

export type MutationDeleteRestaurantArgs = {
  input: DeleteRestaurantInput;
};

export type MutationEditProfileArgs = {
  input: EditProfileInputArgs;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationUpdateDishArgs = {
  input: EditDishInput;
};

export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};

export type MutationUpdateOrderDriverArgs = {
  input: TakeOrderInput;
};

export type MutationUpdateRestaurantArgs = {
  input: UpdateRestaurantInput;
};

export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

export type MyRestaurantInput = {
  id: Scalars['Float'];
};

export type MyRestaurantOutput = {
  __typename?: 'MyRestaurantOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  restaurant?: Maybe<Restaurant>;
};

export type MyRestaurantsOutput = {
  __typename?: 'MyRestaurantsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  restaurants: Array<Restaurant>;
};

export type Order = {
  __typename?: 'Order';
  customer?: Maybe<User>;
  driver?: Maybe<User>;
  driverId?: Maybe<Scalars['Float']>;
  id: Scalars['Float'];
  items?: Maybe<Array<OrderItem>>;
  restaurant?: Maybe<Restaurant>;
  status?: Maybe<OrderStatus>;
  total?: Maybe<Scalars['Float']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  dish: Dish;
  id: Scalars['Float'];
  options?: Maybe<Array<OrderItemOption>>;
};

export type OrderItemOption = {
  __typename?: 'OrderItemOption';
  choice?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type OrderItemOptionInputType = {
  choice?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export enum OrderStatus {
  Cooked = 'Cooked',
  Cooking = 'Cooking',
  Delivered = 'Delivered',
  Pending = 'Pending',
  PickedUp = 'PickedUp',
}

export type OrderUpdatesInput = {
  id: Scalars['Float'];
};

export type Payment = {
  __typename?: 'Payment';
  id: Scalars['Float'];
  restaurant: Restaurant;
  restaurantId: Scalars['Int'];
  transactionId: Scalars['String'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  findCategoryBySlug: CategoryOutput;
  findManyCategories: FindManyCategoriesOutput;
  findManyDishes: FindManyDishesOutput;
  findManyOrders: FindManyOrdersOutput;
  findManyPayments: FindManyPaymentOutput;
  findManyRestaurants: RestaurantsOutput;
  findOrder: FindOrderOutput;
  findRestaurant: RestaurantOutput;
  me: User;
  myRestaurant: MyRestaurantOutput;
  myRestaurants: MyRestaurantsOutput;
  searchRestaurant: SearchRestaurantOutput;
  userProfile: UserProfileOutput;
};

export type QueryFindCategoryBySlugArgs = {
  input: CategoryInput;
};

export type QueryFindManyOrdersArgs = {
  input: FindManyOrdersInput;
};

export type QueryFindManyRestaurantsArgs = {
  input: RestaurantsInput;
};

export type QueryFindOrderArgs = {
  input: FindOrderInput;
};

export type QueryFindRestaurantArgs = {
  input: RestaurantInput;
};

export type QueryMyRestaurantArgs = {
  input: MyRestaurantInput;
};

export type QuerySearchRestaurantArgs = {
  input: SearchRestaurantInput;
};

export type QueryUserProfileArgs = {
  userId: Scalars['Float'];
};

export type Restaurant = {
  __typename?: 'Restaurant';
  address: Scalars['String'];
  category?: Maybe<Category>;
  coverImg?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  isPromoted: Scalars['Boolean'];
  menu: Array<Dish>;
  name: Scalars['String'];
  orders: Array<Order>;
  owner?: Maybe<User>;
  promotedUntil?: Maybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type RestaurantInput = {
  restaurantId: Scalars['Int'];
};

export type RestaurantOutput = {
  __typename?: 'RestaurantOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Restaurant>;
};

export type RestaurantsInput = {
  page?: InputMaybe<Scalars['Int']>;
};

export type RestaurantsOutput = {
  __typename?: 'RestaurantsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<Restaurant>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type SearchRestaurantInput = {
  page?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
};

export type SearchRestaurantOutput = {
  __typename?: 'SearchRestaurantOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  results?: Maybe<Array<Restaurant>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  cookedOrders: Order;
  orderUpdates: Order;
  pendingOrders: Order;
};

export type SubscriptionOrderUpdatesArgs = {
  input: OrderUpdatesInput;
};

export type TakeOrderInput = {
  id: Scalars['Float'];
};

export type TakeOrderOutput = {
  __typename?: 'TakeOrderOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdateOrderInput = {
  id: Scalars['Float'];
  status?: InputMaybe<OrderStatus>;
};

export type UpdateOrderOutput = {
  __typename?: 'UpdateOrderOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdateRestaurantInput = {
  address?: InputMaybe<Scalars['String']>;
  categoryName?: InputMaybe<Scalars['String']>;
  coverImg?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  restaurantId: Scalars['Float'];
};

export type UpdateRestaurantOutput = {
  __typename?: 'UpdateRestaurantOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Float'];
  orders: Array<Order>;
  password: Scalars['String'];
  payments: Array<Payment>;
  restaurants: Array<Restaurant>;
  rides: Array<Order>;
  role: UserRole;
  verified?: Maybe<Scalars['Boolean']>;
};

export type UserProfileOutput = {
  __typename?: 'UserProfileOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export enum UserRole {
  Client = 'Client',
  Delivery = 'Delivery',
  Owner = 'Owner',
}

export type VerifyEmailInput = {
  code: Scalars['String'];
};

export type VerifyEmailOutput = {
  __typename?: 'VerifyEmailOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CategoryPartsFragment = {
  __typename?: 'Category';
  id: number;
  name: string;
  coverImg?: string | null;
  slug: string;
  countRestaurants: number;
};

export type DishPartsFragment = {
  __typename?: 'Dish';
  id: number;
  name: string;
  price?: number | null;
  photo?: string | null;
  description?: string | null;
  type?: string | null;
  options?: Array<{
    __typename?: 'DishOption';
    name: string;
    extra?: number | null;
    choices?: Array<{
      __typename?: 'DishChoice';
      name: string;
      extra?: number | null;
    }> | null;
  }> | null;
};

export type FullOrderPartsFragment = {
  __typename?: 'Order';
  id: number;
  status?: OrderStatus | null;
  total?: number | null;
  driver?: { __typename?: 'User'; email: string } | null;
  customer?: { __typename?: 'User'; email: string } | null;
  restaurant?: { __typename?: 'Restaurant'; name: string } | null;
};

export type RestaurantPartsFragment = {
  __typename?: 'Restaurant';
  id: number;
  name: string;
  coverImg?: string | null;
  address: string;
  isPromoted: boolean;
  category?: { __typename?: 'Category'; name: string } | null;
};

export type CreateOrderMutationVariables = Exact<{
  input: CreateOrderInput;
}>;

export type CreateOrderMutation = {
  __typename?: 'Mutation';
  createOrder: {
    __typename?: 'CreateOrderOutput';
    ok: boolean;
    orderId: number;
    error?: string | null;
  };
};

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'LoginOutput';
    ok: boolean;
    token?: string | null;
    error?: string | null;
  };
};

export type UpdateOrderDriverMutationVariables = Exact<{
  input: TakeOrderInput;
}>;

export type UpdateOrderDriverMutation = {
  __typename?: 'Mutation';
  updateOrderDriver: {
    __typename?: 'TakeOrderOutput';
    ok: boolean;
    error?: string | null;
  };
};

export type UpdateOrderMutationVariables = Exact<{
  input: UpdateOrderInput;
}>;

export type UpdateOrderMutation = {
  __typename?: 'Mutation';
  updateOrder: {
    __typename?: 'UpdateOrderOutput';
    ok: boolean;
    error?: string | null;
  };
};

export type FindOrderQueryVariables = Exact<{
  input: FindOrderInput;
}>;

export type FindOrderQuery = {
  __typename?: 'Query';
  findOrder: {
    __typename?: 'FindOrderOutput';
    ok: boolean;
    error?: string | null;
    order?: {
      __typename?: 'Order';
      id: number;
      status?: OrderStatus | null;
      total?: number | null;
      driver?: { __typename?: 'User'; email: string } | null;
      customer?: { __typename?: 'User'; email: string } | null;
      restaurant?: { __typename?: 'Restaurant'; name: string } | null;
    } | null;
  };
};

export type FindRestaurantQueryVariables = Exact<{
  input: RestaurantInput;
}>;

export type FindRestaurantQuery = {
  __typename?: 'Query';
  findRestaurant: {
    __typename?: 'RestaurantOutput';
    ok: boolean;
    error?: string | null;
    results?: {
      __typename?: 'Restaurant';
      id: number;
      name: string;
      coverImg?: string | null;
      address: string;
      isPromoted: boolean;
      menu: Array<{
        __typename?: 'Dish';
        id: number;
        name: string;
        price?: number | null;
        photo?: string | null;
        description?: string | null;
        type?: string | null;
        options?: Array<{
          __typename?: 'DishOption';
          name: string;
          extra?: number | null;
          choices?: Array<{
            __typename?: 'DishChoice';
            name: string;
            extra?: number | null;
          }> | null;
        }> | null;
      }>;
      category?: { __typename?: 'Category'; name: string } | null;
    } | null;
  };
};

export type FindManyRestaurantsQueryVariables = Exact<{
  input: RestaurantsInput;
}>;

export type FindManyRestaurantsQuery = {
  __typename?: 'Query';
  findManyCategories: {
    __typename?: 'FindManyCategoriesOutput';
    ok: boolean;
    error?: string | null;
    categories?: Array<{
      __typename?: 'Category';
      id: number;
      name: string;
      coverImg?: string | null;
      slug: string;
      countRestaurants: number;
    }> | null;
  };
  findManyRestaurants: {
    __typename?: 'RestaurantsOutput';
    ok: boolean;
    error?: string | null;
    totalPages?: number | null;
    totalResults?: number | null;
    results?: Array<{
      __typename?: 'Restaurant';
      id: number;
      name: string;
      coverImg?: string | null;
      address: string;
      isPromoted: boolean;
      category?: { __typename?: 'Category'; name: string } | null;
    }> | null;
  };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: 'Query';
  me: {
    __typename?: 'User';
    email: string;
    role: UserRole;
    verified?: boolean | null;
  };
};

export type CookedOrdersSubscriptionVariables = Exact<{ [key: string]: never }>;

export type CookedOrdersSubscription = {
  __typename?: 'Subscription';
  cookedOrders: {
    __typename?: 'Order';
    id: number;
    status?: OrderStatus | null;
    total?: number | null;
    driver?: { __typename?: 'User'; email: string } | null;
    customer?: { __typename?: 'User'; email: string } | null;
    restaurant?: { __typename?: 'Restaurant'; name: string } | null;
  };
};

export type OrderUpdatesSubscriptionVariables = Exact<{
  input: OrderUpdatesInput;
}>;

export type OrderUpdatesSubscription = {
  __typename?: 'Subscription';
  orderUpdates: {
    __typename?: 'Order';
    id: number;
    status?: OrderStatus | null;
    total?: number | null;
    driver?: { __typename?: 'User'; email: string } | null;
    customer?: { __typename?: 'User'; email: string } | null;
    restaurant?: { __typename?: 'Restaurant'; name: string } | null;
  };
};

export const CategoryPartsFragmentDoc = gql`
  fragment CategoryParts on Category {
    id
    name
    coverImg
    slug
    countRestaurants
  }
`;
export const DishPartsFragmentDoc = gql`
  fragment DishParts on Dish {
    id
    name
    price
    photo
    description
    type
    options {
      name
      extra
      choices {
        name
        extra
      }
    }
  }
`;
export const FullOrderPartsFragmentDoc = gql`
  fragment FullOrderParts on Order {
    id
    status
    total
    driver {
      email
    }
    customer {
      email
    }
    restaurant {
      name
    }
  }
`;
export const RestaurantPartsFragmentDoc = gql`
  fragment RestaurantParts on Restaurant {
    id
    name
    coverImg
    category {
      name
    }
    address
    isPromoted
  }
`;
export const CreateOrderDocument = gql`
  mutation createOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {
      ok
      orderId
      error
    }
  }
`;
export type CreateOrderMutationFn = Apollo.MutationFunction<
  CreateOrderMutation,
  CreateOrderMutationVariables
>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOrderMutation,
    CreateOrderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(
    CreateOrderDocument,
    options
  );
}
export type CreateOrderMutationHookResult = ReturnType<
  typeof useCreateOrderMutation
>;
export type CreateOrderMutationResult =
  Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<
  CreateOrderMutation,
  CreateOrderMutationVariables
>;
export const LoginDocument = gql`
  mutation login($loginInput: LoginInput!) {
    login(input: $loginInput) {
      ok
      token
      error
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const UpdateOrderDriverDocument = gql`
  mutation UpdateOrderDriver($input: TakeOrderInput!) {
    updateOrderDriver(input: $input) {
      ok
      error
    }
  }
`;
export type UpdateOrderDriverMutationFn = Apollo.MutationFunction<
  UpdateOrderDriverMutation,
  UpdateOrderDriverMutationVariables
>;

/**
 * __useUpdateOrderDriverMutation__
 *
 * To run a mutation, you first call `useUpdateOrderDriverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderDriverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderDriverMutation, { data, loading, error }] = useUpdateOrderDriverMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOrderDriverMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOrderDriverMutation,
    UpdateOrderDriverMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOrderDriverMutation,
    UpdateOrderDriverMutationVariables
  >(UpdateOrderDriverDocument, options);
}
export type UpdateOrderDriverMutationHookResult = ReturnType<
  typeof useUpdateOrderDriverMutation
>;
export type UpdateOrderDriverMutationResult =
  Apollo.MutationResult<UpdateOrderDriverMutation>;
export type UpdateOrderDriverMutationOptions = Apollo.BaseMutationOptions<
  UpdateOrderDriverMutation,
  UpdateOrderDriverMutationVariables
>;
export const UpdateOrderDocument = gql`
  mutation updateOrder($input: UpdateOrderInput!) {
    updateOrder(input: $input) {
      ok
      error
    }
  }
`;
export type UpdateOrderMutationFn = Apollo.MutationFunction<
  UpdateOrderMutation,
  UpdateOrderMutationVariables
>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOrderMutation,
    UpdateOrderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(
    UpdateOrderDocument,
    options
  );
}
export type UpdateOrderMutationHookResult = ReturnType<
  typeof useUpdateOrderMutation
>;
export type UpdateOrderMutationResult =
  Apollo.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = Apollo.BaseMutationOptions<
  UpdateOrderMutation,
  UpdateOrderMutationVariables
>;
export const FindOrderDocument = gql`
  query findOrder($input: FindOrderInput!) {
    findOrder(input: $input) {
      ok
      error
      order {
        ...FullOrderParts
      }
    }
  }
  ${FullOrderPartsFragmentDoc}
`;

/**
 * __useFindOrderQuery__
 *
 * To run a query within a React component, call `useFindOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOrderQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindOrderQuery(
  baseOptions: Apollo.QueryHookOptions<FindOrderQuery, FindOrderQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindOrderQuery, FindOrderQueryVariables>(
    FindOrderDocument,
    options
  );
}
export function useFindOrderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindOrderQuery,
    FindOrderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindOrderQuery, FindOrderQueryVariables>(
    FindOrderDocument,
    options
  );
}
export type FindOrderQueryHookResult = ReturnType<typeof useFindOrderQuery>;
export type FindOrderLazyQueryHookResult = ReturnType<
  typeof useFindOrderLazyQuery
>;
export type FindOrderQueryResult = Apollo.QueryResult<
  FindOrderQuery,
  FindOrderQueryVariables
>;
export const FindRestaurantDocument = gql`
  query findRestaurant($input: RestaurantInput!) {
    findRestaurant(input: $input) {
      ok
      error
      results {
        ...RestaurantParts
        menu {
          ...DishParts
        }
      }
    }
  }
  ${RestaurantPartsFragmentDoc}
  ${DishPartsFragmentDoc}
`;

/**
 * __useFindRestaurantQuery__
 *
 * To run a query within a React component, call `useFindRestaurantQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRestaurantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRestaurantQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindRestaurantQuery(
  baseOptions: Apollo.QueryHookOptions<
    FindRestaurantQuery,
    FindRestaurantQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindRestaurantQuery, FindRestaurantQueryVariables>(
    FindRestaurantDocument,
    options
  );
}
export function useFindRestaurantLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindRestaurantQuery,
    FindRestaurantQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindRestaurantQuery, FindRestaurantQueryVariables>(
    FindRestaurantDocument,
    options
  );
}
export type FindRestaurantQueryHookResult = ReturnType<
  typeof useFindRestaurantQuery
>;
export type FindRestaurantLazyQueryHookResult = ReturnType<
  typeof useFindRestaurantLazyQuery
>;
export type FindRestaurantQueryResult = Apollo.QueryResult<
  FindRestaurantQuery,
  FindRestaurantQueryVariables
>;
export const FindManyRestaurantsDocument = gql`
  query FindManyRestaurants($input: RestaurantsInput!) {
    findManyCategories {
      ok
      error
      categories {
        ...CategoryParts
      }
    }
    findManyRestaurants(input: $input) {
      ok
      error
      totalPages
      totalResults
      results {
        ...RestaurantParts
      }
    }
  }
  ${CategoryPartsFragmentDoc}
  ${RestaurantPartsFragmentDoc}
`;

/**
 * __useFindManyRestaurantsQuery__
 *
 * To run a query within a React component, call `useFindManyRestaurantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyRestaurantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyRestaurantsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindManyRestaurantsQuery(
  baseOptions: Apollo.QueryHookOptions<
    FindManyRestaurantsQuery,
    FindManyRestaurantsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    FindManyRestaurantsQuery,
    FindManyRestaurantsQueryVariables
  >(FindManyRestaurantsDocument, options);
}
export function useFindManyRestaurantsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindManyRestaurantsQuery,
    FindManyRestaurantsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FindManyRestaurantsQuery,
    FindManyRestaurantsQueryVariables
  >(FindManyRestaurantsDocument, options);
}
export type FindManyRestaurantsQueryHookResult = ReturnType<
  typeof useFindManyRestaurantsQuery
>;
export type FindManyRestaurantsLazyQueryHookResult = ReturnType<
  typeof useFindManyRestaurantsLazyQuery
>;
export type FindManyRestaurantsQueryResult = Apollo.QueryResult<
  FindManyRestaurantsQuery,
  FindManyRestaurantsQueryVariables
>;
export const MeDocument = gql`
  query me {
    me {
      email
      role
      verified
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const CookedOrdersDocument = gql`
  subscription cookedOrders {
    cookedOrders {
      ...FullOrderParts
    }
  }
  ${FullOrderPartsFragmentDoc}
`;

/**
 * __useCookedOrdersSubscription__
 *
 * To run a query within a React component, call `useCookedOrdersSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCookedOrdersSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCookedOrdersSubscription({
 *   variables: {
 *   },
 * });
 */
export function useCookedOrdersSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    CookedOrdersSubscription,
    CookedOrdersSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    CookedOrdersSubscription,
    CookedOrdersSubscriptionVariables
  >(CookedOrdersDocument, options);
}
export type CookedOrdersSubscriptionHookResult = ReturnType<
  typeof useCookedOrdersSubscription
>;
export type CookedOrdersSubscriptionResult =
  Apollo.SubscriptionResult<CookedOrdersSubscription>;
export const OrderUpdatesDocument = gql`
  subscription orderUpdates($input: OrderUpdatesInput!) {
    orderUpdates(input: $input) {
      ...FullOrderParts
    }
  }
  ${FullOrderPartsFragmentDoc}
`;

/**
 * __useOrderUpdatesSubscription__
 *
 * To run a query within a React component, call `useOrderUpdatesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOrderUpdatesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderUpdatesSubscription({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOrderUpdatesSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    OrderUpdatesSubscription,
    OrderUpdatesSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    OrderUpdatesSubscription,
    OrderUpdatesSubscriptionVariables
  >(OrderUpdatesDocument, options);
}
export type OrderUpdatesSubscriptionHookResult = ReturnType<
  typeof useOrderUpdatesSubscription
>;
export type OrderUpdatesSubscriptionResult =
  Apollo.SubscriptionResult<OrderUpdatesSubscription>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
