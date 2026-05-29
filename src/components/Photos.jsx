import { Card, Space, Typography, Image } from 'antd'

const { Title, Text } = Typography

const Photos = ({ data }) => {
    console.log(data)
    return (
        <>
            <Title>Photos list</Title>
            <Card
                size='large'
            >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                    {data.map(({ id, urls, description, alt_description }) =>
                        <li key={id}>
                            <Title>{description}</Title>
                            <Image
                                id={id}
                                src={urls.small_s3}
                                alt={alt_description}
                                style={{ width: '100%', borderRadius: '8px' }}
                                preview={false}
                            />
                        </li>
                    )}
                </div>
            </Card>
        </>
    )
}

export default Photos