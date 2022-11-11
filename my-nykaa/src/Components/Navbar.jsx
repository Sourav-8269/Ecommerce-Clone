import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {navigate} from "react"
import {Link, Navigate} from "react-router-dom"

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Image,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    InputGroup,
    InputLeftElement,
    Input
  } from '@chakra-ui/react';

 
  import {
    Search2Icon,
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    PhoneIcon
  } from '@chakra-ui/icons';
import DrawerExample from './Drawer';
import { AppContext } from './Context/AuthContext';
import { useContext } from 'react';  

  export default function WithSubnavigation() {

    const {isAuth} = useContext(AppContext);
    const { isOpen, onToggle } = useDisclosure();
    
    const handleclick=()=>{
      // console.log("HIi")
      
    }
  
    return (
      <Box width="100%" position="fixed" overflow="visible" top="0" zIndex="1" >
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            // border="1px solid red"
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              
                {/* <Image src="../images/nykaa.png"/> */}
                {/* <img src="  " alt="tetx" /> */}
                <Link to="/" >
                <img style={{cursor:"pointer"}} onClick={handleclick}  width="100px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYkAAACACAMAAADJe2XzAAAAjVBMVEX////8J3n8AG38AG/8AGv8Hnb8HHX8FHP8DHH8AHD/8fX+rMX//f7+us7/6/H/+vz+1uL9fqf9g6r+yNj+scj/7fL9kbP+3+j+wtT/5e38V5D/9fj+ztz9eaT9nLr9iK38OYH9bJz+2uX9Z5n9psH8NoD8Rof9lrb8WZH+vdD9oL39aJr9cp/8Tov8Qob3vNAiAAAZIElEQVR4nMVdZ0PyzBI1CSmgKCoWFBXF/qr//+ddQiDZmXNmdyP43PmmpGybdqbk4OCf0OTj8PLs9OxtOoOfTka3e3jB8fTs/SVJvk/HUZeP5uPD6TUORlwzmx33H9pocv1x7n/w/5GmZVaVRU1leiMmN7/L0ywdLq/9Dxgv8yy/uZyYv/+kZZEnKyqqbBoazuj+Ja2qsqwGXyfmkG/SNMuytFoGH9fR8fOySodVVaVJj7v+Id2lSUfle/fD6Dsr1v/Ms1fP6TteZPUq52WWHLLfz5Mqd94w8LPF1deg3F5aVHN6zbxon5hXVeSqXn+nZTuO7DHupr3Q0/Pb4fWTeapaesgSlwbtDxfOAhYL8/6rrLssu8HfxUavyTOY42VaiNGwZf4ciMell8E5HhzMXjP3OCTDmJv2QrPXtFwxeDb4CRyZuZxWUrS/vLpDzywBdTF0786AK77LRNGAPaah+0GhL/7Ai/TWDs79U1zReJDrmy6CN+2FPto35+mZ90o1wKK9eix4pXwz7v8RU8yX6ud32IjkxRrKbFHBxUmq5eIYeCx/9c5wRdMBPLf8N0wxdt88OPZc+awm310sl7B85vffy/vzd/nzJa5tZTzp4DDV53Z9ueKyJ1zUZBCwoSbkHvtA7JPkaK1FXJNaqeJ0+8Ol3ImUG0a3qXX/ms5xCXJrBZYZXLse/b246kSLr5qyK+9yHCFf1jMaeW/aCx3J0eYeO+FNDXKwHd6xXMN8we9/VAtTCcNoNEyABtyYnyVsievr5Sp//2InzuhODLldtlf6Um+2+fBEncNOSyylpMi4UjzXMjsVtto3ipvqnj5oTCVT/WJ5/QPRJKHjfcxk02okf+9TTGB5zEuVCOqmNJfPyH/4/Xr5pHB6w2UzHnQKWnhDQyntPvh1mXc97ji3lZ/eu/ZBC70+5pHRUr582P7yEsUSwPbCOGB6ksqm0Q8VH/XIH8SFM2PDvMp3ZNz098bTGIRzZhlPJkscKotoQW8HM0awxBGRN1Q2nWeGZMoH0m46SviF2mDzT5IO9k8I35kZiJfJEkdKrAzRvarpBZjPtSa1tkoM2fRgSaYyUYr43VDq/jWlmiXxGzJ7oSm+2dqJB4sl9A8cn7jXbxLe3zVZYOLZjF6tlVKSydLW+r0R69FQTpCZvRJ5pyGdtABtWeJC/aCdq4bQJCmdX2/JAlSoI8+HhmQqSm1kom/dPtdnBb1Yd1lWyL4ItYSpsc8Us7ey5Us7CfR2MFHFgixRkhBQwpRM2buGLq/MjUgqD+50zv3FNdl37YPYEUiP2JUjdaZblrjSP1AjY6qnKJznMVmAVLOmKZnyAcACJwbv1ORz7G7s+4behdyVPghLGK881Syx5Rzl1HV+t0u3sNSpI05uyTAAbzJtpvIFFRtxEnHkSB5O8rhZ+yAwZ2pasCsvLJaYaZj8i93+n5Y+wpSMkU2mZGLg8Z3lcQSW1PHq8h992z7CwhZdM6nIzW3tebbjAvXxRO4GmEPYRR9h2WRKpqIgeNChR9onHoHv2On58k6dUtPN2gdRlqDmtrZ8WmWgLar8m70I3lM6NucJWeShlE2mZMoeiVKjqHY3Qtscve9Yqbp+1Dvhxw13InYWAVduSNtHw62ton0JCnQgulke2c9OYD8tyZRnzIccWS5BQ1x8rskZZgb6b2hmQOxOlCUUUt2QVgatqQ8swTAdjNZkzjtQcq1kkxurvP02lja7oaIbgDRJNoA07t5T3MFO+IzfHYkaTnzvdVyhjV5ri2rIMjFgx4U6Jus2dH3DSWXARyn1IBVskr/q++xImBPZzeYHWjpVHMPZBxnuJNFMwBJbpwwdZ/IegDlEOOeU4E2ubLo3hH71ymP8z0rkPum3mys6ce4siMP6ZwEKgyWYY/efPpXbH2JGS2AOR10z7eoa/O98lPmAh5D08waza70Tprx3mKCWYNpa9EaVdyILYcnhSu1Ft5pE8wplCXSyXHVNBuCk3lwZQVLmzK1Jaet0iii3ZY26HlNtJ2nBSy2ZfRBDnGoiZqjWXe16a/XBtATAHIlr8ACMK6zMQ0MyDTTu2pJM4invVkwFWDwFc2RgorY7HvRO/FWoiM+RGXkaAhhaLMEMJ4Q5XHue5cB0sunRSN/ITXtS+tbriBUcuNK41+GmdaRUM1PhTwT7NY1N9B62Xp+qdr2BJYguRCDD9Z6JHd2mJF8lHLJIbX9gKs9MttLpF4A8UtdTBibWQ9R5LCvD9k+ITrKmUtuGT7EsweLD6Cy4EVGfbPrkkok7c5sByZeldUbouT5xlmPnHIpmsz7V4P4oaGeGplZuvrrUZAltXDDDCRWus11MNmWNbLq94WrMcOYaUsNZKxO9npa4nzu80xzGZ70TOnN0P0Sn2cxVCWGdhNOyhEZnWYQIYQ43OdCWTR8cZ8pTn00vBeHGewQoBXh+c7Pzwgbd1If1b8KnNkuAkQexk+0PWrSUaNDgoXeFLctvWuPAJ0amZfbuSxlTLt2GueAhHLRwnZ4NGK01qaVgdiNfHEUaeSZLHOnVIlglHvqqi3KiM7JZvo+KOhEFA8Q6Uk5P2gjZE9BTHFJ1TdbNez70TvxFIPvQg1YqGQN+WfsMEDzwGsz8dpG/Vy6bRu+UIfL0zl9lIy8vNybnBGOFTNGINNPNWQRd/xfZ4j6wciGunKuZdL6bvg+FEwIZrqjV+f9JIxaeecZrtQhg0kpJbGeBYpjmO7jaeWtcnYPNEFzX3uRjCRWxA4R5+4PeIiJ/cUkdsJslPVYHT6w4ZbU4WQjzUVG69kXaUTakvXvFcDORyT/YCSM3rpm08F90LKljCe3VIZwDV4gEJgAhVlw1PYOiqvXipV+hELJWEu0wQbhS/+zaXfQt0zyBYItZ217kYwllbmuUsBWVqAl1nB5jyW66LI2gc7hv+MMi45LUHDrnDV5DcTxXZbWgxhV458Fh9CVvSEskp2vgvIMzUP6qnSBo98BZUX9YzR1PTFjgUcJN3eE9hp1g0QmBIrT+1OzPd8LLEtJRVizhIHwoXGRRChyozpypicAclPLBmYGcuqTgXicOBcEJcFxrknJ0+19ArAq8czfyH0dX8V4rluhKe2/xxAtrH/R5Io4UcyUYZd8x+RTqaa52v0cfH51DARZ06ctgU/As09+Tx72uyY1oKcPJcW0Yklt0c2S5GKmDZ/ky9JxFKeO6dkj/sXCNPx2LpsspGDRtQ1C6SCFQitTcczyLz4oKTN9J2dfZulmX40UroKrDtYlz9VYR2VM4+BnLggWKE0wHUHhRulISn4pGrPDq3FyH+Kq3+imT57vXbN0c5CeuDswK1bWv6062coLdSfAzXabJ6yLLgkW0MUqiWoQtpmZCSkm4KYFo4REjVqC1Lj4YvRPHHw8/6XDT9KXuDZLENDTgOU7sdVrWO2mWx2Yir/V0N984Ql3naWx9oRpKJYxwxDqIESuG7BbNw04Qr2b28bassqpQhzYCGOF2vENdorgS5q7zDZBMiFxXIkJdD7+ju2RIXaZQOoJ1gBErVJ6IQcBOCGV/MpmevaZZVbLDNwz0VTqgsJui7ZUahE0dM0YHUYLkuhKeEoWGrJQyRioAksodBKwjyUDmia0UG6XleIsijObPXy8pcIJD4fJIZl3KVWg1lvIYxGnBGfqpdAYW5EorpYyRqs7TbbnQRgMJI1dEmEcsPWd2/bYsap3gn0M4qgQOWb5Qf29lkE7ocFmC5RR7qfInOAka+OoRFY3krhb/qd9x08GIFRlEMn0DwMO7m8yQRkCLwMihZCZffqmjv53Mfx6WIGa6l9yoxGcgkbvsk5GtVZkyewGvQCNWJihKBxyOW95j2oGRgxswnCsu2YLzWq0KlujJE+70wV2SVN2Em651pMKvA72JiHWA/JZJTdLk6WuWCPKPXBct1lCKUuHboaq1VlGLWNioIbflg9EUY0NpD8kEIGMFSRuIdUDzjcr89ehql51Y+IcOKaLlm9HDTGcVq5KtAGKiXuIE83SGraRwH0yXjkwsZksE61BGrERtth3mbufPdy+DGCDAolBGDrjX6bFWaptlU9m52hSwPTtCLoTpBZw8xT6MVHYhFA3TRhjKiBUSoV6+i/P7xyRsG4UokM0MJ3m1wBoPaAJFGobMdFVhHITX3OscQ1/d+erA9uplpaBwwk9EJykjVlow+XJZppG2UYC8HfwI0FGNIZTSgMKqnhS7BbDsPU6CnfyX9iopVGxZkIJZDERrI1bPcx+bUA+GNkvtCL26DIO1a7YClsBkLdI9kpOrrv0xqn6FbAqxr4jNhXlA2ojdRRVwyosyG94FjhRUQdR2kkaQ1uaDMo1ou6bzYZT9JHJvAnre22NGkRpiyjZRl6IAEtvL8AjRag+qLHs9PQxyNjYAq/0YPZh6JzRL0CrGg5O3bXvxsqyGWZamGZmYW6xg9bBq57KI3gjVP7ikCfWIsTl7fTU9S/a0Ees9SH/uPs/jokRwQtYT1yZ3vRO664DppTxNL+++vk4vP8fzq9HJ0QWeMde7ttq6dUTMH04nUQ2l8H1NhPf2/O09y3jKZ09a78FitQc92vGjIbEeFhSTfUIOOG/XRAkS3V1V73fqNi+PI2XADmhQiSQ1VJOrw7tkL/ZRXrf+fvm6D3xrgRCKhrXg0JDgajHi2jVR0lrHrfaNySKIzDxVBiw612tisfYq29VTaPYgfXm8//hd9wjd6XUrMxf6v5/QoaNHyaXiCaEgwWAgeWYYPWCkDFhLvfSDZKKoWO1B8vj2cRUXYadE0k3WTo7eoPJTc0naA5NT92aOHwVdaZPiUefFR/afVJrY6LIcjkj1puJhHPFZiAAhKrk+rxhy1+5fYRbcIimEUfTxQ688u0XdlUUcNoXAGl2W/8JZ2EdfIUyRb2BuRPA1Bfx2QVoXOT8hzlFLPQhcRVgHyr03PmFwMtGlo72JlHfs4YNFGPRoQAhMflBU9Ci4VLpIeObYX6Y2GNDsDetsdQOxfGfjddJLYGYeWuvkBFpk7KPDEzH0m2UKJmnQDmYGSZYQgBNmWa1PP7oYgDVqUg1XVCfT2/k9SXqJp41d1OjkyMKwXkTeuVmhwE70qfJTbWOFIrUGANrD32ka6rvdoMTV9HSxYoUdNiGt3i/HrV1ESvR6HEtOOtO4S3ULpcsYrdopSXdLmEHIkxsEBd+femWxdq43271ihV295vJLgxW4E7t3PSN2y2bjQ1BQjzIa9eED14K16+MRDPN3x1AtNmufaDY+24UVNsTyZXEndv0YCDZBbRFShCsF9QA6VK2F8AfRcmvz/1GT+/wXndpcfP5X7QdAIs2bcCegfUNfQsCnNU3R8RXUo22wyp4RVR+wEZ1bjLamp6EV9sX5HSsUJRr15LuhuBM79p9D/6mLd/ujoD06GqlFEkA6+vddSQyWFXokIqmS7EtFOUxf7p4n+knEeiY7sWP/ObIQrbwzO8uvifal5iRhQwEFIeTlzhsX18zuDfTjDVO9CYeTWvppnJaduSMU6jv2n0OvrlsI79x65FooVMntGU4EkFsIhim2luWsP67Qm8pJq4L06WTVd+hP9AkqEgKYzWUy7+R6eHUSrRJOHTK5kD9zDPun3IHqkU9Cyd3hH/UsivyjXdcDgyOEMcROD3vDaOGPUrakjCPxTTk0lKVFhjvBEdnnQDFUkJzH6nnzdmYxBUk9SHcsEzLRCwDGWwpKXQupRpKO5AEkObbMkO2V7JajcSSkvPY0uXmKcnOnXlvYs8H5qq0XAIwvP1aLKT6bi/EapR0xjZg2w9LyxKIGtHhDmewm8Whwj/swOorWR0ogQWMysbE+ADA+VqfUtVsBz+SfqohGE4XZlNiHGanehHL5tgYtiHXsYNrqRwPsQsW0S5cClNIu2ukDAOM/fKE/K+jeCHkiaJER8QSIbCgInhdVVi7vz1tuJICaU8upVI7RkI70YYhdEiRoTCbPmwcAjDdhlboWph7WCaDBiH2UunqaLXkqZmsgu3p/mEqDC4MLzsS15WygjphqvsP3gKEzpDRcPHGtaBNWq+ShGwBFXIvE/wljKp+SA5VNQOfx7ZqEFUkbry7mpX8ywlOIEu0QoMAZiJo+u3IxvumdMglE6Aa1FEMMUIIpHwr64qyE0TAt3y/NAD9r4PJm/UhaSRrj+v0nKDAuIJ0Tu0rL3/3QIQWGy17RBOolzS9YQax4DPx48zCdeAUFJic7M9Iy2QK7idnXA5uWhDOUItGG1KLTzRRyJYQfYQnqphLZ4zoz+kNcVlqNQwRj7gJu2iay9DBJ1vttk3c0jVRxkGmkR79Sl5IKO4+wBFWORDw5prv+ImqMp8s+BrY16XRHJDNgi1oULIlYQotD4ZwmSwwii9O1uyC0AGEJPmuCPXW9luGrgxEGDMPaW0dVn08TYUVzp0c2uyBSS6VcEwtBiHbr4YOB7o/kqBupG6xb1NbU0al8MeyKa+icAa0czTwBYuNHtHhiROoHpN/MYNLmhZE2glbXQs8T99o6UyyNfMOWn9A9IyIfkiRidgoKHmg9hXmHv3IoCKik/GbodNdS5Csg0OT+SDKELYuMoS6NbQllw+RTzUjkhLVmj7bUbP4nBtjv8mzQMNJ+M7G6m1FH1jFodS0WmnUjMEFFxpxrWA7+GwP9ML3TmqraIrInS4q/fpVTQD5rq4EGNuL1GsRBTrjW7q/EL7ajj6wRSO2KfemHRIWSmUveZhdrPqbhujURVO5X8VP02kBKE0C6ptiAiAbcxSoRxMuTCU6hyCFpGBhV68KaWG21AWRY2age24lfRO0Y0KA9RKP20j4lgrAiwv0V8xh8Vg/peloH2RBIjjElmFxs/RMt/D1mIolx/MahIJASfD6MQ7GxRrNOGpOCg8F6HieFlp0gV0eFapj+b/kcytlseUOe84tYETFQMTzMIc7IxD8oc8+9vwZwdmKnEEqjuJVNa2u/w7p44FW2oz1y8TZEhAOmTPBczLhyrhOt7eUGsuf6LMCoMHUokXxDLAlka/SAavTYYtT1713dFcVYJJwSW+uGH44V6ClRdoECgJg4dQT0VxPb1O3R1z6kb7Ysyt+7rIgIB+JV0QyiuBAReFzSLCefqA6kihAm1hRp0zHQqdWRYBV7HATmbvVOFydjIRKO5WJG6mvYRGGhsu5BgVQRy8t0VzMOauAWYfMbHHOftGE5SH2TlLF0hQYG2JDj9DW0GpVBNsJswVQRY/mdJ0Ta8iwQubVVNdDtFZkMDOrr2hHXhgQGWH5LpErC21y3HLPdIrKdg4XsMdBfTcwg3royWmp6cR0GkPaMFRFVwzZ/xGRIVEoHtBqVlUCY7RZRwxpqKhzd1INyeuPrQJKzP0WAIWc9O+QRfUlQUCaag7WfNWFFiajaxo/ERz03kFsWm5JI+6BuKuRQhfQdUb9PbmLxGvdISHe2ODwc/BB54pmcicCL/L1uoqtIuOnUyEZ9RAOfvKbVJZHDWBPLWmHajmWkxqRgYkKecBpJ5UqUojPwyA1Ff2CRPmaTIAHfu/HDWEzj9EkDZIqGBvKJuRcVv8bm5ML3JaHLOJzd52Zn0YEBhptstCTAF4FlJfquR5IqD+JS4AqdqSg4AZ0FqQTIQYrTc55u5T2QN5bXuDFitbAIheuZPdzHySa384wpfNEwBnQOLBMLNUTZAb586TTetSWyeasPoF9LQPcwrDoyZGDNh7MUyQCMeD42y5dBAwJ0RKo5M8EhFvqzZrU5iWArpgFZTAIUfeAOAqUZ8Q1QSDEmO6kpXri/09TKSMfUrA4f9MgMZjKuOcjQpTCU+8sgwPjUWObfGkIHjLQY//oMOHYooBi2mrFQsiWe+rQ24jtBhxY0FFkZYjxPUKucX6rdiYB13QyOeG2h32OeuyZLPMVmJK6JSKfNTsLXboKoM1N5sXk2DEsyQD2Ydwz8T4qrxdOZkosvsKcBE1kuFiSWeXhO5xtO2CEORbQVy/wa440a9I1KwSQ4SmjsPUAzpiL7mfDUiG+8Qg2tRrAqM2Njx8ESCQynSMMCMaYmQlWV1MYsrSJ27Ktjy1I8enYGwLO4aTqu4b8I3Yu+b3yazTdOxPKq1KpGVRHhJywkCoHfozYaHBvE9H0Zvs0l0FTtAqixDcJ9OPHgRQZwD5jbtbAuVQcwynkCNaHsSwxzDXoFuYj1lMVWN21JCciyjQeoLi8xPoo2aobxklZbpnliW5Dv7sjKqET9qRraQC+Trjrp076uJixH6+HUNSSq8vK0s4AlWh91uhXqnPaITqhby4XHlD/OuovLl7gGzSIbrMR1fku7E5mXg8deyvaAePBl3yccHBwOqrLI86Ioh4N3l9MnVdV+rreKQi3aTMr6ywbpSx/+Hjmrm+QDfzbE6CsdluVqxNXgK7JT9u2ymeZqZMPsgazSdJFm2XBYf5Di+/4XPYdfZavTX9XdXkzfTh+Xj2fPc30OD9+rtKbv58j5zsvVdNJssTy9nPYcykW9VPUHOlZ7+B3c96P54eXp3cNhjyW7GF/ePS6/zj5NvXL8NJ/PJ7/t/Pw4KDffC8qL7GcP/aMVHd2OerHZbHbx217it+eH95eXl/fj/c/in9Ds+e6mbl6yeH/YtRfl/5H+B15DZSvb/NCbAAAAAElFTkSuQmCC" alt="" />
                </Link>
              {/* <img  src="data:image/png;base64,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" width="100px" alt="text" border="1px solid" /> */}
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
          {/* <Stack spacing={6} marginRight="2%"> */}
              <InputGroup width="20%" marginRight="2%" bgColor="whitesmoke">
                <InputLeftElement
                
                  pointerEvents='none'
                  children={<Search2Icon color='gray.300' />}
                />
                <Input type='tel' placeholder='Search' size="md" fontWeight="500" />
              </InputGroup>
          {/* </Stack> */}
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            width="100%"
            // border="1px solid red" 
            spacing={6}>
            {isAuth&&<Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              // borderRadius="20px"
              // padding="1%"
              bg={'pink.400'}
              href={'#'}
            //   width="40%"
              _hover={{
                bg: 'pink.300',
              }}>
                {/* Sign in */}
              Sourav
            </Button>}
            {!isAuth&&
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              // padding="1%"
              bg={'pink.400'}
              href={'#'}
            //   width="40%"
              _hover={{
                bg: 'pink.300',
              }}>
                {/* Sign in */}
              <Link to="/login" >Sign in</Link>
            </Button>}
            {!isAuth&&
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              // padding="1%"
              bg={'pink.400'}
              href={'#'}
            //   width="40%"
              _hover={{
                bg: 'pink.300',
              }}>
                {/* Sign in */}
              <Link to="/signup" >Sign up</Link>
            </Button>}
            
          </Stack >
          <Stack marginLeft="1%">
            <Box >
              <DrawerExample/>
            </Box>

          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  // color={linkColor}
                  color="red"
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                  {/* {navItem.subLabel} */}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  
  const NAV_ITEMS = [
    {
      label: 'Categories',
      children: [
        {
          label: 'Explore Design Work',
          subLabel: 'Trending Design to inspire you',
          href: '#',
        },
        {
          label: 'New & Noteworthy',
          subLabel: 'Up-and-coming Designers',
          href: '#',
        },
        
      ],
    },
    {
      label: 'Brands',
      children: [
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'Freelance Projects',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        },
      ],
    },
    {
      label: 'Luxe',
//       Face
// Face Primer
// Concealer
// Foundation
// Compact
// Contour
// Loose Powder
// Tinted Moisturizer
// Blush
// Bronzer
// BB & CC Cream
// Highlighters
// Setting Spray
// Makeup Rem
      children: [
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'Freelance Projects',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        },
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'Freelance Projects',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        }
      ],
    },
    {
      label: 'Nykaa Fashion',
      href: '#',
    },
    {
        label: 'Beauty Advice',
        href: '#',
    },
    
  ];

//   <script src="https://kit.fontawesome.com/24c494a6b6.js"
//   crossorigin="anonymous"></script>