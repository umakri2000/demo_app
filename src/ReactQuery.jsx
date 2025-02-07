// import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DataQuery from "./DataQuery";

function QueryClientExample(){
let createClient=new QueryClient()
    return(
<QueryClientProvider client={createClient}>
    <DataQuery/>
    <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
)
}

export default  QueryClientExample