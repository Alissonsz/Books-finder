import styled from 'styled-components';
import { FaBook } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  margin-bottom: 1rem;
  background-color: #F5F5F5;
  position: relative;
`

export const BookIcon = styled(FaBook)`
  fill: red;
  width: 32px;
  height: 32px;
`
export const SiteName = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  padding-left: 1rem;
`
export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e3e3e3;
  width: 30%;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-top: 0.5rem;
  margin-left: 2.5rem;
  padding-left: 5px;
  padding-bottom: 0.5rem;
`

export const SearchInput = styled.input`
  width: 90%;
  font-size: 18px;
  outline-width: 0;
`
export const SearchIcon = styled(AiOutlineSearch)`
  justify-self: flex-end;
  fill: black;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  cursor: pointer;
`

export const SessionInfos = styled.div`
  justify-self: flex-end;
  position: absolute;
  right: 1.5rem;
  cursor: pointer;
`