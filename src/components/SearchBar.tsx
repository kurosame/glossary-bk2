import { Icon, Input, Paper } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const SearchBar = () => (
  <StyledPaper>
    <StyledInput placeholder="Search..." />
    <StyledIcon>
      <Search />
    </StyledIcon>
  </StyledPaper>
)

const StyledPaper = styled(Paper)`
  display: flex;
  align-items: center;
  width: 300px;
`
const StyledInput = styled(Input)`
  flex-grow: 1;
  margin-left: 10px;
`
const StyledIcon = styled(Icon)`
  margin: 10px;
`

export default SearchBar
