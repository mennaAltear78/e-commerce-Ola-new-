import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tfoot,
  Image,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  useDeleteDashboardProductsMutation,
  useGetDashboardProductListQuery,
  useUpdateDashboardProductsMutation,
} from "../Services/ApISlice";
import TableSkeleton from "./TableSkeleton";
import {
  DeleteIcon,
  EditIcon,
  PhoneIcon,
  SearchIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import Alertdialog from "./AlertDialog";
import CustomModel from "./Modal";

//

function DahboardTable() {
  const [ProductID, setProductID] = useState();
  const [productToEdit, setProductToEdit] = useState({});
  const [thumbnail, setthumbnail] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isModelOpen,
    onOpen: onModelOpen,
    onClose: onModelClose,
  } = useDisclosure();

  const { isLoading, data, error } = useGetDashboardProductListQuery({ page: 1 });

  const [DeleteProduct, { isLoading: isDeleted, isSuccess: isSuccessDelete }] =
  useDeleteDashboardProductsMutation();

  const [UpdateProduct, { isLoading: isUpdated, isSuccess: isSuccessUPdate }] =
  useUpdateDashboardProductsMutation();

  useEffect(() => {
    if (isSuccessDelete) {
      setProductID(null);
      onClose();
    }
    if (isSuccessUPdate) {
      setProductID(null);
      onModelClose();
    }
  }, [isSuccessDelete, isSuccessUPdate]);
  // const submitHandeler = (e) => {
  //   const formData = new FormData();
  //   formData.append(
  //     "data",
  //     JSON.stringify({
  //       title: productToEdit.title,
  //       price: productToEdit.price,
  //       stock: productToEdit.stock,
  //       description: productToEdit.description,
  //     })
  //   );
  //   formData.append("thumbnail", thumbnail);
  //   UpdateProduct({ id: ProductID, body: formData });
  // };
  const submitHandeler=()=>{
    UpdateProduct({ id: ProductID, body: {
        title: productToEdit.title,
        price: productToEdit.price,
        stock: productToEdit.stock,
        description: productToEdit.description,
        thumbnail: productToEdit.thumbnail
    }});
}
  if (isLoading) return <TableSkeleton />;
  return (
    <>
      <Flex w={"83%"} m={"auto"} mb={"-20px"} fontWeight={"bold"}>
        ({data?.data?.length} entries found)
      </Flex>
      <Table size="sm" variant="striped" maxW="85%" mx="auto" my="10">
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>Product</Th>
          
            <Th>thumbnail</Th>
            <Th>stock</Th>
            <Th isNumeric>Price</Th>
            <Th>actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.data?.map((item) => (
            <Tr key={item.id}>
              <Td>{item?.id}</Td>
              <Td>{item?.title}</Td>
              {/* <Td>{item?.categories[1]?.title}</Td> */}
              <Td>
                <Image
                  objectFit={"cover"}
                  w={"30px"}
                  h={"30px"}
                  rounded={"50%"}
                  ml={"30px"}
                  src={`${
                    item?.thumbnail
                  } `} 
                />
              </Td>
              <Td>{item?.stock}</Td>
              <Td isNumeric>{item.price} $</Td>
              <Td>
                <Flex gap={"10px"}>
                  <IconButton
                    as={Link}
                    to={`/products/${item.id}`}
                    colorScheme="blue"
                    icon={<ViewIcon />}
                    h={"30px"}
                  />

                  <IconButton
                    onClick={() => {
                      setProductID(item?.id);
                      onOpen();
                    }}
                    colorScheme={"red"}
                    h={"30px"}
                    icon={<DeleteIcon />}
                  />
                  <IconButton
                    colorScheme={"blue"}
                    h={"30px"}
                    onClick={() => {
                      setProductID(item?.id);
                      setProductToEdit(item);
                      onModelOpen();
                    }}
                    icon={<EditIcon />}
                  />
                </Flex>
              </Td>
            </Tr>
          ))}
          {console.log(productToEdit)}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>id</Th>
            <Th>Product</Th>
         
            <Th>thumbnail</Th>
            <Th>stock</Th>
            <Th isNumeric>Price</Th>
            <Th>actions</Th>
          </Tr>
        </Tfoot>
      </Table>
      <CustomModel
        isOpen={isModelOpen}
        onClose={onModelClose}
        title={"Update product"}
        data={productToEdit}
        setProductToEdit={setProductToEdit}
        productToEdit={productToEdit}
        submitHandeler={submitHandeler}
        thumbnailHandeler={(thub) => setthumbnail(thub)}
        isLoading={isUpdated}
      />
      <Alertdialog
        okayHandeler={() => {
          DeleteProduct(ProductID);
        }}
        isDeleted={isDeleted}
        isOpen={isOpen}
        onClose={onClose}
        title="delete"
        description="are you sure you wanna to delete this item ?"
      />
    </>
  );
}

export default DahboardTable;
