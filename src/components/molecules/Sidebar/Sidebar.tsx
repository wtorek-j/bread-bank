import styled from 'styled-components';

import { useAuth } from '../../../hooks/useAuth';
import SectionSpacer from '../../atoms/SectionSpacer/SectionSpacer';
import SidebarItem from '../../atoms/SidebarItem/SidebarItem';

import {
  SidebarContainer,
  Header,
  LogoWrapper,
  IconsContainer,
  IconWrapper,
  Browse,
  Overlay,
} from './Sidebar.styles';

const Logo = () => (
  <svg
    width="216"
    height="78"
    viewBox="0 0 216 78"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M81.0341 37V2.09091H95.0114C97.5795 2.09091 99.7216 2.47159 101.438 3.23295C103.153 3.99432 104.443 5.05114 105.307 6.40341C106.17 7.74432 106.602 9.28977 106.602 11.0398C106.602 12.4034 106.33 13.6023 105.784 14.6364C105.239 15.6591 104.489 16.5 103.534 17.1591C102.591 17.8068 101.511 18.267 100.295 18.5398V18.8807C101.625 18.9375 102.869 19.3125 104.028 20.0057C105.199 20.6989 106.148 21.6705 106.875 22.9205C107.602 24.1591 107.966 25.6364 107.966 27.3523C107.966 29.2045 107.506 30.858 106.585 32.3125C105.676 33.7557 104.33 34.8977 102.545 35.7386C100.761 36.5795 98.5625 37 95.9489 37H81.0341ZM88.4148 30.9659H94.4318C96.4886 30.9659 97.9886 30.5739 98.9318 29.7898C99.875 28.9943 100.347 27.9375 100.347 26.6193C100.347 25.6534 100.114 24.8011 99.6477 24.0625C99.1818 23.3239 98.517 22.7443 97.6534 22.3239C96.8011 21.9034 95.7841 21.6932 94.6023 21.6932H88.4148V30.9659ZM88.4148 16.6989H93.8864C94.8977 16.6989 95.7955 16.5227 96.5795 16.1705C97.375 15.8068 98 15.2955 98.4545 14.6364C98.9205 13.9773 99.1534 13.1875 99.1534 12.267C99.1534 11.0057 98.7045 9.98864 97.8068 9.21591C96.9205 8.44318 95.6591 8.05682 94.0227 8.05682H88.4148V16.6989ZM112.632 37V10.8182H119.672V15.3864H119.945C120.422 13.7614 121.223 12.5341 122.348 11.7045C123.473 10.8636 124.768 10.4432 126.234 10.4432C126.598 10.4432 126.99 10.4659 127.411 10.5114C127.831 10.5568 128.2 10.6193 128.518 10.6989V17.142C128.178 17.0398 127.706 16.9489 127.104 16.8693C126.501 16.7898 125.95 16.75 125.45 16.75C124.382 16.75 123.428 16.983 122.587 17.4489C121.757 17.9034 121.098 18.5398 120.609 19.358C120.132 20.1761 119.893 21.1193 119.893 22.1875V37H112.632ZM142.986 37.5114C140.293 37.5114 137.974 36.9659 136.031 35.875C134.099 34.7727 132.611 33.2159 131.565 31.2045C130.52 29.1818 129.997 26.7898 129.997 24.0284C129.997 21.3352 130.52 18.9716 131.565 16.9375C132.611 14.9034 134.082 13.3182 135.98 12.1818C137.889 11.0455 140.128 10.4773 142.696 10.4773C144.423 10.4773 146.031 10.7557 147.52 11.3125C149.02 11.858 150.327 12.6818 151.44 13.7841C152.565 14.8864 153.44 16.2727 154.065 17.9432C154.69 19.6023 155.003 21.5455 155.003 23.7727V25.767H132.895V21.267H148.168C148.168 20.2216 147.94 19.2955 147.486 18.4886C147.031 17.6818 146.401 17.0511 145.594 16.5966C144.798 16.1307 143.872 15.8977 142.815 15.8977C141.713 15.8977 140.736 16.1534 139.884 16.6648C139.043 17.1648 138.384 17.8409 137.906 18.6932C137.429 19.5341 137.185 20.4716 137.173 21.5057V25.7841C137.173 27.0795 137.412 28.1989 137.889 29.142C138.378 30.0852 139.065 30.8125 139.952 31.3239C140.838 31.8352 141.889 32.0909 143.105 32.0909C143.912 32.0909 144.651 31.9773 145.321 31.75C145.991 31.5227 146.565 31.1818 147.043 30.7273C147.52 30.2727 147.884 29.7159 148.134 29.0568L154.849 29.5C154.509 31.1136 153.81 32.5227 152.753 33.7273C151.707 34.9205 150.355 35.8523 148.696 36.5227C147.048 37.1818 145.145 37.5114 142.986 37.5114ZM167.207 37.4943C165.537 37.4943 164.048 37.2045 162.741 36.625C161.435 36.0341 160.401 35.1648 159.639 34.017C158.889 32.858 158.514 31.4148 158.514 29.6875C158.514 28.233 158.781 27.0114 159.315 26.0227C159.849 25.0341 160.577 24.2386 161.497 23.6364C162.418 23.0341 163.463 22.5795 164.634 22.2727C165.815 21.9659 167.054 21.75 168.349 21.625C169.872 21.4659 171.099 21.3182 172.031 21.1818C172.963 21.0341 173.639 20.8182 174.06 20.5341C174.48 20.25 174.69 19.8295 174.69 19.2727V19.1705C174.69 18.0909 174.349 17.2557 173.668 16.6648C172.997 16.0739 172.043 15.7784 170.804 15.7784C169.497 15.7784 168.457 16.0682 167.685 16.6477C166.912 17.2159 166.401 17.9318 166.151 18.7955L159.435 18.25C159.776 16.6591 160.446 15.2841 161.446 14.125C162.446 12.9545 163.736 12.0568 165.315 11.4318C166.906 10.7955 168.747 10.4773 170.838 10.4773C172.293 10.4773 173.685 10.6477 175.014 10.9886C176.355 11.3295 177.543 11.858 178.577 12.5739C179.622 13.2898 180.446 14.2102 181.048 15.3352C181.651 16.4489 181.952 17.7841 181.952 19.3409V37H175.065V33.3693H174.861C174.44 34.1875 173.878 34.9091 173.173 35.5341C172.469 36.1477 171.622 36.6307 170.634 36.983C169.645 37.3239 168.503 37.4943 167.207 37.4943ZM169.287 32.483C170.355 32.483 171.298 32.2727 172.116 31.8523C172.935 31.4205 173.577 30.8409 174.043 30.1136C174.509 29.3864 174.741 28.5625 174.741 27.642V24.8636C174.514 25.0114 174.202 25.1477 173.804 25.2727C173.418 25.3864 172.98 25.4943 172.491 25.5966C172.003 25.6875 171.514 25.7727 171.026 25.8523C170.537 25.9205 170.094 25.983 169.696 26.0398C168.844 26.1648 168.099 26.3636 167.463 26.6364C166.827 26.9091 166.332 27.2784 165.98 27.7443C165.628 28.1989 165.452 28.767 165.452 29.4489C165.452 30.4375 165.81 31.1932 166.526 31.7159C167.253 32.2273 168.173 32.483 169.287 32.483ZM197.233 37.4261C195.244 37.4261 193.443 36.9148 191.83 35.892C190.227 34.858 188.955 33.3409 188.011 31.3409C187.08 29.3295 186.614 26.8636 186.614 23.9432C186.614 20.9432 187.097 18.4489 188.062 16.4602C189.028 14.4602 190.313 12.9659 191.915 11.9773C193.528 10.9773 195.295 10.4773 197.216 10.4773C198.682 10.4773 199.903 10.7273 200.881 11.2273C201.869 11.7159 202.665 12.3295 203.267 13.0682C203.881 13.7955 204.347 14.5114 204.665 15.2159H204.886V2.09091H212.131V37H204.972V32.8068H204.665C204.324 33.5341 203.841 34.2557 203.216 34.9716C202.602 35.6761 201.801 36.2614 200.812 36.7273C199.835 37.1932 198.642 37.4261 197.233 37.4261ZM199.534 31.6477C200.705 31.6477 201.693 31.3295 202.5 30.6932C203.318 30.0455 203.943 29.142 204.375 27.983C204.818 26.8239 205.04 25.4659 205.04 23.9091C205.04 22.3523 204.824 21 204.392 19.8523C203.96 18.7045 203.335 17.8182 202.517 17.1932C201.699 16.5682 200.705 16.2557 199.534 16.2557C198.341 16.2557 197.335 16.5795 196.517 17.2273C195.699 17.875 195.08 18.7727 194.659 19.9205C194.239 21.0682 194.028 22.3977 194.028 23.9091C194.028 25.4318 194.239 26.7784 194.659 27.9489C195.091 29.108 195.71 30.017 196.517 30.6761C197.335 31.3239 198.341 31.6477 199.534 31.6477Z"
      fill="black"
    />
    <path
      d="M65.0341 76V41.0909H79.0114C81.5795 41.0909 83.7216 41.4716 85.4375 42.233C87.1534 42.9943 88.4432 44.0511 89.3068 45.4034C90.1705 46.7443 90.6023 48.2898 90.6023 50.0398C90.6023 51.4034 90.3295 52.6023 89.7841 53.6364C89.2386 54.6591 88.4886 55.5 87.5341 56.1591C86.5909 56.8068 85.5114 57.267 84.2955 57.5398V57.8807C85.625 57.9375 86.8693 58.3125 88.0284 59.0057C89.1989 59.6989 90.1477 60.6705 90.875 61.9205C91.6023 63.1591 91.9659 64.6364 91.9659 66.3523C91.9659 68.2045 91.5057 69.858 90.5852 71.3125C89.6761 72.7557 88.3295 73.8977 86.5455 74.7386C84.7614 75.5795 82.5625 76 79.9489 76H65.0341ZM72.4148 69.9659H78.4318C80.4886 69.9659 81.9886 69.5739 82.9318 68.7898C83.875 67.9943 84.3466 66.9375 84.3466 65.6193C84.3466 64.6534 84.1136 63.8011 83.6477 63.0625C83.1818 62.3239 82.517 61.7443 81.6534 61.3239C80.8011 60.9034 79.7841 60.6932 78.6023 60.6932H72.4148V69.9659ZM72.4148 55.6989H77.8864C78.8977 55.6989 79.7955 55.5227 80.5795 55.1705C81.375 54.8068 82 54.2955 82.4545 53.6364C82.9205 52.9773 83.1534 52.1875 83.1534 51.267C83.1534 50.0057 82.7045 48.9886 81.8068 48.2159C80.9205 47.4432 79.6591 47.0568 78.0227 47.0568H72.4148V55.6989ZM104.098 76.4943C102.428 76.4943 100.939 76.2045 99.6321 75.625C98.3253 75.0341 97.2912 74.1648 96.5298 73.017C95.7798 71.858 95.4048 70.4148 95.4048 68.6875C95.4048 67.233 95.6719 66.0114 96.206 65.0227C96.7401 64.0341 97.4673 63.2386 98.3878 62.6364C99.3082 62.0341 100.354 61.5795 101.524 61.2727C102.706 60.9659 103.945 60.75 105.24 60.625C106.763 60.4659 107.99 60.3182 108.922 60.1818C109.854 60.0341 110.53 59.8182 110.95 59.5341C111.371 59.25 111.581 58.8295 111.581 58.2727V58.1705C111.581 57.0909 111.24 56.2557 110.558 55.6648C109.888 55.0739 108.933 54.7784 107.695 54.7784C106.388 54.7784 105.348 55.0682 104.575 55.6477C103.803 56.2159 103.291 56.9318 103.041 57.7955L96.3253 57.25C96.6662 55.6591 97.3366 54.2841 98.3366 53.125C99.3366 51.9545 100.626 51.0568 102.206 50.4318C103.797 49.7955 105.638 49.4773 107.729 49.4773C109.183 49.4773 110.575 49.6477 111.905 49.9886C113.246 50.3295 114.433 50.858 115.467 51.5739C116.513 52.2898 117.337 53.2102 117.939 54.3352C118.541 55.4489 118.842 56.7841 118.842 58.3409V76H111.956V72.3693H111.751C111.331 73.1875 110.768 73.9091 110.064 74.5341C109.359 75.1477 108.513 75.6307 107.524 75.983C106.536 76.3239 105.393 76.4943 104.098 76.4943ZM106.178 71.483C107.246 71.483 108.189 71.2727 109.007 70.8523C109.825 70.4205 110.467 69.8409 110.933 69.1136C111.399 68.3864 111.632 67.5625 111.632 66.642V63.8636C111.405 64.0114 111.092 64.1477 110.695 64.2727C110.308 64.3864 109.871 64.4943 109.382 64.5966C108.893 64.6875 108.405 64.7727 107.916 64.8523C107.428 64.9205 106.984 64.983 106.587 65.0398C105.734 65.1648 104.99 65.3636 104.354 65.6364C103.717 65.9091 103.223 66.2784 102.871 66.7443C102.518 67.1989 102.342 67.767 102.342 68.4489C102.342 69.4375 102.7 70.1932 103.416 70.7159C104.143 71.2273 105.064 71.483 106.178 71.483ZM131.737 60.8636V76H124.476V49.8182H131.396V54.4375H131.703C132.283 52.9148 133.254 51.7102 134.618 50.8239C135.982 49.9261 137.635 49.4773 139.578 49.4773C141.396 49.4773 142.982 49.875 144.334 50.6705C145.686 51.4659 146.737 52.6023 147.487 54.0795C148.237 55.5455 148.612 57.2955 148.612 59.3295V76H141.351V60.625C141.362 59.0227 140.953 57.7727 140.124 56.875C139.294 55.9659 138.152 55.5114 136.697 55.5114C135.72 55.5114 134.857 55.7216 134.107 56.142C133.368 56.5625 132.788 57.1761 132.368 57.983C131.959 58.7784 131.749 59.7386 131.737 60.8636ZM160.915 68.4659L160.932 59.7557H161.989L170.375 49.8182H178.71L167.443 62.9773H165.722L160.915 68.4659ZM154.335 76V41.0909H161.597V76H154.335ZM170.699 76L162.994 64.5966L167.835 59.4659L179.205 76H170.699Z"
      fill="black"
    />
    <path
      d="M40.6595 24.6361C39.9177 24.1939 38.9551 24.4242 38.4951 25.1602C38.0341 25.8977 38.2512 26.8667 38.9778 27.3385C39.0282 27.3714 39.081 27.4018 39.1348 27.4286C39.3633 27.5428 39.6062 27.5969 39.8454 27.5969C40.4293 27.5969 40.9914 27.2744 41.2705 26.7167C41.6464 25.9648 41.3717 25.0579 40.6595 24.6361Z"
      fill="black"
    />
    <path
      d="M27.7483 44.0171C27.7394 44.0158 27.7171 44.0126 27.7083 44.0112C26.8395 43.8913 26.0276 44.4985 25.9074 45.3696C25.7872 46.2407 26.3893 47.043 27.2604 47.1632C27.3431 47.1761 27.4251 47.1822 27.5064 47.1822C28.2779 47.1822 28.9555 46.6204 29.0774 45.8341C29.2121 44.9656 28.6172 44.152 27.7483 44.0171Z"
      fill="black"
    />
    <path
      d="M73.5364 4.46291C70.6584 1.58498 66.832 0 62.7622 0C58.9428 0 55.3382 1.39577 52.5305 3.94601C48.5616 3.10766 44.2704 3.46597 39.999 5.04349C33.6078 7.40391 28.0123 12.2288 24.2431 18.6292C23.4125 20.0398 22.6836 21.5111 22.0702 23.0092C21.6894 23.1441 21.3107 23.288 20.935 23.4431C16.0245 25.4726 11.7966 29.1773 9.03053 33.8745C6.02403 38.9799 4.9075 44.857 5.84792 50.5189C5.03334 51.2894 4.54355 51.8726 4.38252 52.0723C-1.47677 58.02 -1.45133 67.6236 4.46205 73.5372C7.34012 76.415 11.1665 78 15.2364 78C19.3064 78 23.1327 76.415 26.0108 73.5371L73.5367 26.0112C79.4775 20.0704 79.4773 10.4037 73.5364 4.46291ZM71.2853 23.7603L23.7594 71.2861C21.4828 73.5625 18.456 74.8163 15.2364 74.8163C12.0168 74.8163 8.98986 73.5625 6.71323 71.2859C2.01358 66.5861 2.01358 58.9394 6.71323 54.2397C6.76076 54.1922 6.80326 54.1416 6.84379 54.09C6.84394 54.0903 6.84425 54.0906 6.8444 54.091C6.89894 54.0208 12.4263 47.0654 23.0574 46.8905C23.9363 46.876 24.6374 46.1518 24.6229 45.2728C24.6084 44.4027 23.8987 43.7071 23.0317 43.7071C23.0227 43.7071 23.014 43.7071 23.0049 43.7073C16.638 43.8121 11.8856 46.0331 8.76728 48.1703C8.43609 43.8205 9.47111 39.4004 11.7739 35.4902C16.7422 27.0534 26.3176 23.0004 35.0601 25.6341C35.9024 25.8875 36.7898 25.4108 37.0435 24.5691C37.2972 23.7274 36.8203 22.8394 35.9786 22.5859C32.7901 21.6253 29.3818 21.4308 26.0362 21.9852C26.3343 21.3962 26.6509 20.815 26.9867 20.2448C30.3846 14.4749 35.3974 10.137 41.1022 8.03019C46.6929 5.96532 52.2777 6.30368 56.8276 8.9831C57.5849 9.42916 58.561 9.17673 59.007 8.41928C59.4531 7.66167 59.2007 6.68591 58.4431 6.23985C57.7211 5.81466 56.978 5.44065 56.2173 5.11433C58.1497 3.85932 60.4034 3.18383 62.762 3.18383C65.9816 3.18383 69.0086 4.43762 71.2852 6.71425C75.9848 11.4137 75.9848 19.0605 71.2853 23.7603Z"
      fill="black"
    />
    <path
      d="M62.8054 9.20917C62.7626 9.18236 62.7167 9.15677 62.6716 9.13422C61.8854 8.74102 60.929 9.05988 60.5361 9.84612C60.156 10.6063 60.4411 11.5254 61.1712 11.9409C61.4195 12.0831 61.6914 12.1512 61.9602 12.1512C62.4909 12.1512 63.0095 11.8859 63.3116 11.4028C63.7775 10.6574 63.551 9.67519 62.8054 9.20917Z"
      fill="black"
    />
    <path
      d="M216 61C216 69.2843 209.284 76 201 76C192.716 76 201 69.2843 201 61C201 52.7157 192.716 46 201 46C209.284 46 216 52.7157 216 61Z"
      fill="black"
    />
  </svg>
);

const unauthenticatedItems = [
  {
    text: 'Starting Screen',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z" />
      </svg>
    ),
  },
  {
    text: 'See Locations',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
      </svg>
    ),
  },
  {
    text: 'Quick Loan',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12.164 7.165c-1.15.191-1.702 1.233-1.231 2.328.498 1.155 1.921 1.895 3.094 1.603 1.039-.257 1.519-1.252 1.069-2.295-.471-1.095-1.784-1.827-2.932-1.636zm1.484 2.998l.104.229-.219.045-.097-.219c-.226.041-.482.035-.719-.027l-.065-.387c.195.03.438.058.623.02l.125-.041c.221-.109.152-.387-.176-.453-.245-.054-.893-.014-1.135-.552-.136-.304-.035-.621.356-.766l-.108-.239.217-.045.104.229c.159-.026.345-.036.563-.017l.087.383c-.17-.021-.353-.041-.512-.008l-.06.016c-.309.082-.21.375.064.446.453.105.994.139 1.208.612.173.385-.028.648-.36.774zm10.312 1.057l-3.766-8.22c-6.178 4.004-13.007-.318-17.951 4.454l3.765 8.22c5.298-4.492 12.519-.238 17.952-4.454zm-2.803-1.852c-.375.521-.653 1.117-.819 1.741-3.593 1.094-7.891-.201-12.018 1.241-.667-.354-1.503-.576-2.189-.556l-1.135-2.487c.432-.525.772-1.325.918-2.094 3.399-1.226 7.652.155 12.198-1.401.521.346 1.13.597 1.73.721l1.315 2.835zm2.843 5.642c-6.857 3.941-12.399-1.424-19.5 5.99l-4.5-9.97 1.402-1.463 3.807 8.406-.002.007c7.445-5.595 11.195-1.176 18.109-4.563.294.648.565 1.332.684 1.593z" />
      </svg>
    ),
  },
  {
    text: 'Exchange Rates',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M24 3v10h-4.809l-2.134-2h4.943v-6h-12v-.384l-3.17 2.972 2.27 2.412h-2.747l-2.353-2.5 8-7.5v3h12zm-6.712 6.42c-.581 0-.936-.41-1.073-.92h1.119l.055-.334h-1.232l-.002-.332h1.291l.054-.334h-1.292c.131-.518.476-.938 1.025-.938.188 0 .398.033.64.104l.127-.527c-.309-.092-.603-.139-.873-.139-.994 0-1.591.691-1.766 1.5h-.361l-.055.334h.367l-.002.332h-.422l-.054.334h.523c.173.809.777 1.5 1.848 1.5.25 0 .501-.047.746-.137l-.147-.539c-.175.064-.348.096-.516.096zm2.712 7.08l-8-7.5v3h-12v9h12v3l8-7.5zm-13.332 2.062v.438h-.418v-.416c-.431-.008-.878-.11-1.25-.303l.19-.686c.398.155.928.319 1.343.226.479-.108.577-.601.048-.838-.389-.181-1.573-.336-1.573-1.352 0-.567.432-1.075 1.242-1.188v-.443h.418v.424c.301.008.64.061 1.017.176l-.15.687c-.319-.112-.674-.215-1.018-.193-.62.036-.676.573-.242.798.713.335 1.644.584 1.644 1.478 0 .714-.562 1.095-1.251 1.192z" />
      </svg>
    ),
  },
  {
    text: 'Currency Converter',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M20 2v20h-16v-20h16zm2-2h-20v24h20v-24zm-13 21h-4v-3h4v3zm0-4h-4v-3h4v3zm0-4h-4v-3h4v3zm5 8h-4v-3h4v3zm0-4h-4v-3h4v3zm0-4h-4v-3h4v3zm5 8h-4v-7h4v7zm0-8h-4v-3h4v3zm0-10h-14v5h14v-5z" />
      </svg>
    ),
  },
  {
    text: 'Contact',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M14.89 23.654c-7.367 3.367-18.802-18.86-11.601-22.615l2.107-1.039 3.492 6.817-2.082 1.026c-2.189 1.174 2.37 10.08 4.609 8.994.091-.041 2.057-1.007 2.064-1.011l3.521 6.795c-.008.004-1.989.978-2.11 1.033zm-1.538-13.409l2.917.87c.223-.747.16-1.579-.24-2.317-.399-.739-1.062-1.247-1.808-1.469l-.869 2.916zm1.804-6.058c1.551.462 2.926 1.516 3.756 3.051.831 1.536.96 3.263.498 4.813l-1.795-.535c.325-1.091.233-2.306-.352-3.387-.583-1.081-1.551-1.822-2.643-2.146l.536-1.796zm.95-3.187c2.365.705 4.463 2.312 5.729 4.656 1.269 2.343 1.466 4.978.761 7.344l-1.84-.548c.564-1.895.406-4.006-.608-5.882-1.016-1.877-2.696-3.165-4.591-3.729l.549-1.841z" />
      </svg>
    ),
  },
  {
    text: 'Make An Appointment',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M21 14.655l-5.799.908 3.393 6.917-3.111 1.52-3.413-6.982-4.07 3.651v-15.857l13 9.843zm-15-6.212c-1.19-.693-2-1.969-2-3.443 0-2.206 1.794-4 4-4 2.235 0 4.164 1.875 3.969 4.309l.928.703c.637-3.087-1.715-6.012-4.897-6.012-2.761 0-5 2.239-5 5 0 2.049 1.236 3.806 3 4.578v-1.135z" />
      </svg>
    ),
  },
];

const UsernameContainer = styled.div`
  padding: 2px 1rem;
  color: white;
  background-color: black;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;

  & p {
    margin: 0;
  }
`;

function Sidebar({ handleCloseSidebar }: { handleCloseSidebar?: () => void }) {
  const { user, logOut } = useAuth();

  const authenticatedContent = (
    <>
      <UsernameContainer>
        <p>JOHN DOE</p>
        <p>Balance: $30.213,31</p>
      </UsernameContainer>
      <SidebarItem
        key={'logout'}
        text={'Log Out'}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="red"
          >
            <path d="M10 9.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7zm6-3c-1.787 0-3.46.474-4.911 1.295l.228.2 1.396 1.221c1.004-.456 2.114-.716 3.287-.716 4.411 0 8 3.589 8 8s-3.589 8-8 8c-1.173 0-2.283-.26-3.288-.715l-1.396 1.221-.228.2c1.452.82 3.125 1.294 4.912 1.294 5.522 0 10-4.477 10-10s-4.478-10-10-10z" />
          </svg>
        }
        handleClick={logOut}
      />
      <SectionSpacer>Browse</SectionSpacer>
      <ul style={{ margin: '0', padding: '0' }}>
        {unauthenticatedItems.map(({ text, icon }) => (
          <SidebarItem key={text} text={text} icon={icon} />
        ))}
      </ul>
    </>
  );

  const unauthenticatedContent = (
    <>
      <Browse>Browse</Browse>
      <ul style={{ margin: '0', padding: '0' }}>
        {unauthenticatedItems.map(({ text, icon }) => (
          <SidebarItem key={text} text={text} icon={icon} />
        ))}
      </ul>
    </>
  );

  return (
    <>
      <SidebarContainer>
        <Header>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <IconsContainer>
            <IconWrapper>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M24 23h-24v-13.275l2-1.455v-7.27h20v7.272l2 1.453v13.275zm-20-10.472v-9.528h16v9.527l-8 5.473-8-5.472zm14-.528h-12v-1h12v1zm0-3v1h-12v-1h12zm-7-1h-5v-3h5v3zm7 0h-6v-1h6v1zm0-2h-6v-1h6v1z" />
              </svg>
            </IconWrapper>
            <IconWrapper>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
              </svg>
            </IconWrapper>
          </IconsContainer>
        </Header>
        {user ? authenticatedContent : unauthenticatedContent}
      </SidebarContainer>
      <Overlay onClick={handleCloseSidebar}></Overlay>
    </>
  );
}

export default Sidebar;
