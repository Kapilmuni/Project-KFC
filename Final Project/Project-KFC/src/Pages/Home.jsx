import {Box,Flex,Text,Button,Image, Heading ,Grid,List,UnorderedList,
    ListItem,} from "@chakra-ui/react";

import {Link as ReactRouterLink} from "react-router-dom"
import { Link as ChakraLink } from '@chakra-ui/react';

export default function Home() {
    return(
        <>
        <Box marginTop="165px" padding="12px" bgColor="rgb(32, 33, 36)">
            <Flex align="center"  justifyContent="space-around" width="43%" m="auto">
                <Text fontSize="14px" color="white" fontFamily="Arial Black">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</Text>
                <Button colorScheme='white' bgColor="red" color="white" fontSize="14px" height="45px" width="160px" borderRadius="30px" ml="12px">Start Order</Button>
            </Flex>
        </Box>
        <Box>
            <Image src="https://images.ctfassets.net/wtodlh47qxpt/3rG3DVKuArGcVVWvMJL0vL/6028fc17975a8c862c86fd67c0e54de5/web_1440x396px.jpg?w=1372&fit=fill&fm=webp"/>
        </Box>
        <Box paddingTop="100px" paddingBottom="60px">
            <Flex  alignItems="center"  margin="auto">
            <Heading fontSize="32px" ml='170px'>BROWSE CATEGORIES</Heading>
            <hr
        style={{
          backgroundColor:'#E2E8F0',
          color: '#E2E8F0',
          borderColor: '#E2E8F0',
          height: '1px',
          marginLeft:'30px',
          width:"630px"
        }} />
        </Flex>
        </Box>
        <Box  width="74%" margin="auto" height="500px">
            <Grid
                
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={2}
                gridRowGap={5} 
            >
                <Box width="94%" height="80%"  borderRadius="5px" >
                    <Image borderRadius="5px 5px 0px 0px" height="180px" width="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT289.jpg?ver=45.09"/>
                    <Text borderRadius="0px 0px 5px 5px"   fontWeight="bold" textAlign="center" bgColor="rgb(248,247,245)"  padding="19px" fontSize="13px">INTERNATIONAL BURGER FEST</Text>
                </Box>
                <Box width="94%" height="80%" borderRadius="5px" >
                    <Image borderRadius="5px 5px 0px 0px" height="180px" width="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT287.jpg?ver=45.09"/>
                    <Text borderRadius="0px 0px 5px 5px" fontFamily="Sans-serif" fontWeight="bold" textAlign="center" bgColor="rgb(248,247,245)"  padding="19px" fontSize="13px">MATCH DAY COMBOS</Text>
                </Box>
                <Box width="94%" height="80%" borderRadius="5px" >
                    <Image borderRadius="5px 5px 0px 0px" height="180px" width="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT228.jpg?ver=45.09"/>
                    <Text borderRadius="0px 0px 5px 5px" fontFamily="Sans-serif" fontWeight="bold" textAlign="center" bgColor="rgb(248,247,245)"  padding="19px" fontSize="13px">VALUE LUNCH SPECIALS
                    </Text>
                </Box>
                <Box width="94%" height="80%" borderRadius="5px" >
                    <Image borderRadius="5px 5px 0px 0px" height="180px" width="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=45.09"/>
                    <Text borderRadius="0px 0px 5px 5px" fontFamily="Sans-serif" fontWeight="bold" textAlign="center" bgColor="rgb(248,247,245)"  padding="19px" fontSize="13px">BOX MEALS
                    </Text>
                </Box>
                <Box width="94%" height="80%" borderRadius="5px" >
                    <Image borderRadius="5px 5px 0px 0px" height="180px" width="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=45.09"/>
                    <Text borderRadius="0px 0px 5px 5px" fontFamily="Sans-serif" fontWeight="bold" textAlign="center" bgColor="rgb(248,247,245)"  padding="19px" fontSize="13px">BURGERS
                    </Text>
                </Box>
                <Box width="94%" height="80%" borderRadius="5px" >
                    <Image borderRadius="5px 5px 0px 0px" height="180px" width="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=45.09"/>
                    <Text borderRadius="0px 0px 5px 5px" fontFamily="Sans-serif" fontWeight="bold" textAlign="center" bgColor="rgb(248,247,245)"  padding="19px" fontSize="13px">CHICKEN BUCKETS
                    </Text>
                </Box>
                <Box width="94%" height="80%" borderRadius="5px" >
                    <Image borderRadius="5px 5px 0px 0px" height="180px" width="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT213.jpg?ver=45.09"/>
                    <Text borderRadius="0px 0px 5px 5px" fontFamily="Sans-serif" fontWeight="bold" textAlign="center" bgColor="rgb(248,247,245)"  padding="19px" fontSize="13px">RICE BOWLZ
                    </Text>
                </Box>
                <Box bgColor="rgb(248,247,245)" width="94%" height="80%" borderRadius="5px" >
                    <Image borderRadius="5px 5px 0px 0px" height="180px" width="100%" src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg "/>
                    <Flex width="100%" bgColor="rgb(248,247,245)">
                    <Text borderRadius="0px 0px 5px 5px" marginLeft="40px" fontFamily="Sans-serif" fontWeight="bold" textAlign="center" bgColor="rgb(248,247,245)"  padding="19px" fontSize="13px">View All Menu </Text>
                    <Image src="https://online.kfc.co.in/static/media/black_right_arrow.a801582c.svg"/>
                    </Flex>
                </Box>

            </Grid>
        </Box>
        <Box width="100%" height="370px" mt="30px"  paddingTop="100px" bgColor="rgb(32, 33, 36)" >
            <Flex width="85%" margin="auto">
                <Image mb="60px" mr="80px" src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg" alt=""/>
                <Box>
                    <Flex>
                        <UnorderedList spacing="6px " fontSize="14px" mr="10px" listStyleType="none" color="white">
                            <ListItem>Legal </ListItem>
                            <ListItem>Terms and Conditions </ListItem>
                            <ListItem>Privacy Policy </ListItem>
                            <ListItem>Disclaimer</ListItem>
                            <ListItem>Caution Notice</ListItem>
                        </UnorderedList>
                        <UnorderedList spacing="6px " fontSize="14px" mr="10px" listStyleType="none" color="white">
                            <ListItem>KFC India </ListItem>
                            <ListItem>About KFC </ListItem>
                            <ListItem>KFC Care </ListItem>
                            <ListItem>Careers</ListItem>
                            <ListItem>Our Golden Past</ListItem>
                        </UnorderedList>
                        <UnorderedList spacing="6px " fontSize="14px" mr="10px" listStyleType="none" color="white">
                            <ListItem>KFC Food </ListItem>
                            <ListItem>Menu </ListItem>
                            <ListItem>Order Lookup </ListItem>
                            <ListItem>Gift Card</ListItem>
                            <ListItem>Nutrition & Allergen</ListItem>
                        </UnorderedList>
                        <UnorderedList spacing="6px " fontSize="14px" mr="10px" listStyleType="none" color="white">
                            <ListItem>Support </ListItem>
                            <ListItem>Get Help </ListItem>
                            <ListItem>Contact Us </ListItem>
                            <ListItem>KFC Feedback</ListItem>
                            <ListItem>Privacy Policy</ListItem>
                        </UnorderedList>
                    </Flex>
                </Box>
                <Box>
                    <Flex ml="30px">
                        <Image  src="https://images.ctfassets.net/wtodlh47qxpt/6qgKpWUOIsrIiazhk3cdmF/d60b4c20be69bab1f939bf33348b67e9/Find_KFC.svg"/>
                        <Text ml="10px" color="white" fontSize="14px" textDecoration="underline"><a href="">Find a KFC</a></Text>
                    </Flex>
                </Box>
                <Box>
                    <Flex ml="50px" gap="30px">
                        <a href="https://play.google.com/store/apps/details?id=com.yum.kfc"><Image width="120px" src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"  /></a>
                        <a href="https://apps.apple.com/in/app/kfc-india-online-ordering-app/id915824379"><Image width="120px" src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg" /></a>
                    </Flex>
                </Box>
            </Flex>
            <Box>
                <Flex gap="44%" align="center" mt="90px" width="70%" ml="auto" >
                    <Text fontSize="12px" color="rgb(219, 219, 219)">Copyright © KFC Corporation 2024 All rights reserved</Text>
                    <Flex gap="10px">
                        <a href="https://www.instagram.com/kfcindia_official/"><Image src="https://images.ctfassets.net/wtodlh47qxpt/4ZHyPA2EeaoP3aqtNDriBA/463462a9c27b0aa585e12b21ce3766e0/Social_Insta_White.svg"/></a>
                        <a href="https://www.facebook.com/KFCIndia"><Image src="https://images.ctfassets.net/wtodlh47qxpt/dKiu2meLcfz2DNwsg7nZw/7194830b1ba6f25b158a23d6b2c4752c/Social_Facebook_White.svg"/></a>
                        <a href="https://x.com/KFC_India"><Image src="https://images.ctfassets.net/wtodlh47qxpt/78z9x0WwdkdXwGVK726EKX/6599ca34ec88e2a6f46d7d94ed85a8ad/Social_Twitter_White.svg"/></a>
                    </Flex>
                </Flex>
            </Box>
        </Box>




    </>)
}