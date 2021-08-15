import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import { useState } from 'react';
import styles from './expenses.module.scss';
import person1 from '../assets/images/person1.png';
import person2 from '../assets/images/person2.png';
import person3 from '../assets/images/person3.png';
import addIcon from '../assets/images/addIcon.png';
import menuIcon from '../assets/images/menuIcon.png';
import cartIcon from '../assets/icons/cartIcon.svg';
import transportIcon from '../assets/icons/transportIcon.svg';
import houseIcon from '../assets/icons/houseIcon.svg';
import boxesIllustration from '../assets/images/boxes.png';
import plantIllustration from '../assets/images/plant.png';

const EXPENSES = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const TODAYS_EXPENSES = [
  {
    id: 1,
    expense: 'Grocery',
    time: '5:12 pm',
    location: 'Belanja di pascar',
    price: 326.8,
    icon: cartIcon,
    iconBackgroundColor: '#32a7e2',
  },
  {
    id: 2,
    expense: 'Transportation',
    time: '5:12 pm',
    location: 'Naik bus umum',
    price: 15.0,
    icon: transportIcon,
    iconBackgroundColor: '#B548C6',
  },
  {
    id: 3,
    expense: 'Housing',
    time: '5:12 pm',
    location: 'Bayar Listrik',
    price: 185.75,
    icon: houseIcon,
    iconBackgroundColor: '#FF8700',
  },
];

const PREVIOUS_EXPENSES = [
  {
    id: 1,
    expense: 'Food and Drink',
    time: '5:12 pm',
    location: 'Makan Steak',
    price: 156.0,
    icon: cartIcon,
    iconBackgroundColor: '#DC3434',
  },
  {
    id: 2,
    expense: 'Entertainment',
    time: '5:12 pm',
    location: 'Nonton Bioskop',
    price: 35.2,
    icon: transportIcon,
    iconBackgroundColor: '#4BA83D',
  },
];

const EXPENSES_CATEGORIES = [
  {
    id: 1,
    category: 'Food and Drinks',
    price: 872.4,
  },
  {
    id: 2,
    category: 'Shopping',
    price: 1378.2,
  },
  {
    id: 3,
    category: 'Housing',
    price: 928.5,
  },
  {
    id: 4,
    category: 'Transportation',
    price: 420.7,
  },
  {
    id: 5,
    category: 'Vehicle',
    price: 520,
  },
];

type expenses = {
  id: number;
  category: string;
  price: number;
}[];
const getTotalExpensePrice = (expenses: expenses) => {
  return expenses.reduce((total, currentValue) => {
    return total + currentValue.price;
  }, 0);
};

const Expenses = () => {
  const [activeIndex, setActiveIndex] = useState(18);

  const handleBarchartHover = (_data: unknown, index: number) => {
    setActiveIndex(index);
  };

  return (
    <main className={styles.expenses}>
      <div className={styles.expensesCard}>
        <section className={styles.expensesOverview}>
          <div className={styles.expensesHeader}>
            <h1 className={styles.expensesTitle}>Expenses</h1>

            <div className={styles.expensesActions}>
              <div className={styles.expensesUsers}>
                <span className={styles.avatar}>
                  <img src={person1} alt="user 1" />
                </span>
                <span className={styles.avatar}>
                  <img src={person2} alt="user 2" />
                </span>
                <span className={styles.avatar}>
                  <img src={person3} alt="user 3" />
                </span>
              </div>
              <button className={styles.expensesAddButton}>
                <img src={addIcon} alt="add" />
              </button>
            </div>
          </div>
          <p className={styles.expensesDate}>01 - 25 March, 2020</p>

          <div className={styles.expensesChartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                barGap="100%"
                data={EXPENSES}
                margin={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                <Bar
                  dataKey="uv"
                  fill="rgba(21, 122, 255, .2)"
                  onMouseOver={handleBarchartHover}
                >
                  {EXPENSES.map((entry, index) => {
                    return (
                      <Cell
                        key={index}
                        cursor="pointer"
                        fill={
                          index === activeIndex
                            ? 'rgb(21, 122, 255)'
                            : 'rgba(21, 122, 255, .2)'
                        }
                      />
                    );
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.expensesListContainer}>
            <div className={styles.expensesListHeader}>
              <h2 className={styles.expensesListTitle}>Today</h2>

              <button>
                <img src={menuIcon} alt="Menu" />
              </button>
            </div>

            <ul className={styles.expensesList}>
              {TODAYS_EXPENSES.map((expense) => {
                return (
                  <li className={styles.expensesListItem} key={expense.id}>
                    <div className={styles.expensesDetails}>
                      <div
                        className={styles.expensesListItemIcon}
                        style={{ backgroundColor: expense.iconBackgroundColor }}
                      >
                        <img
                          src={expense.icon}
                          alt={`${expense.expense} icon`}
                        />
                      </div>
                      <div>
                        <div className={styles.expensesItemName}>
                          {expense.expense}
                        </div>
                        <div className={styles.expensesItemTimeAndLocation}>
                          {expense.time} • {expense.location}
                        </div>
                      </div>
                    </div>
                    <div className={styles.expensesItemPrice}>
                      -{expense.price.toFixed(3)}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.expensesListContainer}>
            <div className={styles.expensesListHeader}>
              <h2 className={styles.expensesListTitle}>Today</h2>

              <button>
                <img src={menuIcon} alt="Menu" />
              </button>
            </div>

            <ul className={styles.expensesList}>
              {PREVIOUS_EXPENSES.map((expense) => {
                return (
                  <li className={styles.expensesListItem} key={expense.id}>
                    <div className={styles.expensesDetails}>
                      <div
                        className={styles.expensesListItemIcon}
                        style={{ backgroundColor: expense.iconBackgroundColor }}
                      >
                        <img
                          src={expense.icon}
                          alt={`${expense.expense} icon`}
                        />
                      </div>
                      <div>
                        <div className={styles.expensesItemName}>
                          {expense.expense}
                        </div>
                        <div className={styles.expensesItemTimeAndLocation}>
                          {expense.time} • {expense.location}
                        </div>
                      </div>
                    </div>
                    <div className={styles.expensesItemPrice}>
                      -{expense.price.toFixed(3)}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className={styles.moneyOverview}>
          <div>
            <h3 className={styles.moneyOverviewTitle}>Where your money go?</h3>

            <ul>
              {EXPENSES_CATEGORIES.map((category) => {
                return (
                  <li key={category.id}>
                    <div className={styles.spendCategory}>
                      <p>{category.category}</p>
                      <p>{category.price.toFixed(3)}</p>
                    </div>
                    <div className={styles.spendCategoryBar}>
                      <div
                        style={{
                          width: `${
                            (category.price /
                              getTotalExpensePrice(EXPENSES_CATEGORIES)) *
                            100
                          }%`,
                        }}
                        className={styles.spendCategoryColorBar}
                      ></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.moneyTips}>
            <div className={styles.moneyTipsIllustrations}>
              <img src={boxesIllustration} alt="box illustration" />
              <img src={plantIllustration} alt="plant illustration" />
            </div>
            <h2 className={styles.moneyTipsTitle}>Save more money</h2>
            <p className={styles.moneyTipsBody}>
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
            <button className={styles.moneyTipsButton}>VIEW TIPS</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Expenses;
