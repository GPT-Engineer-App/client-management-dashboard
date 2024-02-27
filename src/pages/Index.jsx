import { Box, Button, Container, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, Stack, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { FaCamera, FaPlus, FaSearch } from "react-icons/fa";

const Index = () => {
  // Here, we would fetch the clients and their details from an API or state management store.
  // For demonstration purposes, we're just using a static list.
  const clients = [
    {
      id: 1,
      name: "John Doe",
      policyNumber: "AB-123456",
      address: "123 Elm Street",
      email: "johndoe@example.com",
      carrier: "Example Insurance",
      typeOfLoss: "Fire",
      estimateValue: "$10,000",
      jobSitePhotos: ['https://images.unsplash.com/photo-1567865204021-2da594ef9a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaXJlJTIwZGFtYWdlfGVufDB8fHx8MTcwOTAyMTE2NXww&ixlib=rb-4.0.3&q=80&w=1080'],
    },
    // Add more clients as needed...
  ];

  // This modal would be used to add a new client or additional fields.
  const { isOpen, onOpen, onClose } = useDisclosure();

  // This would be a more complex function to handle uploading and parsing photos.
  const handleUploadAndAnalyzePhotos = () => {
    console.log("Analyzing photos...");
    // This function would interact with an AI service to analyze photos.
  };

  // This would be a function to route to the client details page.
  const handleClientDetails = (clientId) => {
    console.log("Navigating to client details for client ID:", clientId);
    // This would use a routing library to navigate to the client's detail page.
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Client Dashboard
        </Heading>
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={onOpen}>
          Add New Client
        </Button>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {clients.map((client) => (
            <GridItem key={client.id} w="100%" boxShadow="md" p={4} rounded="md">
              <VStack spacing={4} align="stretch">
                <Heading as="h3" size="md">
                  {client.name}
                </Heading>
                <Text>{client.policyNumber}</Text>
                <Text>{client.address}</Text>
                <Button leftIcon={<FaSearch />} colorScheme="teal" variant="outline" onClick={() => handleClientDetails(client.id)}>
                  View Details
                </Button>
                <Box>
                  {client.jobSitePhotos.map((photoUrl, index) => (
                    <Image key={index} src={photoUrl} alt={`Job site photo ${index + 1}`} />
                  ))}
                </Box>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </VStack>

      {/* The modal for adding a new client or additional fields would go here */}
      {/* <Modal isOpen={isOpen} onClose={onClose}> ... </Modal> */}

      <Flex mt={10} justifyContent="space-between" alignItems="center">
        <FormControl>
          <FormLabel htmlFor="photo-upload">Upload and Analyze Photos</FormLabel>
          <Input id="photo-upload" type="file" multiple accept="image/*" onChange={handleUploadAndAnalyzePhotos} />
        </FormControl>
        <Button leftIcon={<FaCamera />} colorScheme="pink" onClick={handleUploadAndAnalyzePhotos}>
          Analyze Photos
        </Button>
      </Flex>
    </Container>
  );
};

export default Index;
