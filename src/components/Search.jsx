import { Card, Input, Typography } from "antd"
import { forwardRef } from "react"

const { Title } = Typography

const Search = forwardRef(({ value, onChange }, ref) => {
    return (
        <Card>
            <Title level={3}>Search</Title>
            <Input
                ref={ref}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </Card>
    )
})

export default Search