import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { Container, Content } from './styles';

const List: React.FC = () => {
    const options = [
        { value: '2021', label: '2021' },
        { value: '2022', label: '2022' },
        { value: '2023', label: '2023' }
    ];

    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={options} />
            </ContentHeader>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/01/2023"
                    amount="R$ 55,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/01/2023"
                    amount="R$ 55,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/01/2023"
                    amount="R$ 55,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/01/2023"
                    amount="R$ 55,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/01/2023"
                    amount="R$ 55,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/01/2023"
                    amount="R$ 55,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/01/2023"
                    amount="R$ 55,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/01/2023"
                    amount="R$ 55,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/01/2023"
                    amount="R$ 55,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/01/2023"
                    amount="R$ 55,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/01/2023"
                    amount="R$ 55,00"
                />
            </Content>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/01/2023"
                    amount="R$ 55,00"
                />
            </Content>
        </Container>
    );
}

export default List;