import { Card, CardContent, CardProps } from "@mui/material";

interface CardContainerProps extends CardProps {
  children: React.ReactNode;
}

const CardContainer = ({ children, ...rest }: CardContainerProps) => (
  <Card variant="outlined" {...rest} sx={{ borderRadius: 0, border: "none", ...rest.sx }}>
    <CardContent sx={{ pt: 3.5 }}>{children}</CardContent>
  </Card>
);

export default CardContainer;
