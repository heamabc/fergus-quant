import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import '../../css/AllPages.scss';

class HomePage extends Component {
    render() {
      const next_line = '\n'
      const tab = ' '
        return (
            <Page>
              <CodeSnippet />
              <Title label="Data Cleaning" />
              <p>
                Garbage in, garbage out. If the data is incorrect and inconsistent, the machine learning will be of no uses.
              </p>
              <PassageTitle label="Common Problem about Data" />
              <MinorTitle label="Incorrect Datatype" />
              <p>
                First, check if the data type is correct, and get familiar with the datatype of each column. For example, for the stock tickers, you 
                would not expect a boolean variable. We need to check if there exist such data. 
              </p>
              <MinorTitle label="Null/NaN" />
              <p>
                Another constraint is, there will be a lot of nan in a 
                dataset. we need to indentify the nan and inspect if it is reasonable to exist. For example, we would not expect a nan in the stock tickers.
              </p>
              <MinorTitle label="Duplicate" />
              <p>
                Another problem is duplicate. For example, we need to check if there is duplicate of stock ticker. And find the reason why the data 
                appears twice.
              </p>
              <MinorTitle label="Inaccurate" />
              <p>
                The last problem is sometimes data is inaccurate. we need to check if the data is reasonable. For example, if we know that S&P500 is in the range 
                of 2700-3000 this year. But you spot the data describing S&P500 is 2000. Then you should inspect why this problem arise.
              </p>

              <PassageTitle label="Inspection of Data" />
              <p>
                We first have a basic understanding of each column. How many nan, what is their distribution, what is their shape, etc.
                <pre className="prettyprint lang-python">
                  df.describe()
                </pre>
                Also, we can check the datatype of the dataframe and the memory usage by this command.
                <pre className="prettyprint lang-python">
                  df.info()
                </pre>
                If the data is not small, it is good to have a look at the whole data. If not, sample some data to view them.
                <pre className="prettyprint lang-python">
                  df.head() {next_line}
                  df.tail() {next_line}
                  df.sample(10)
                </pre>
              </p>
              <PassageTitle label="Downcasting Data" />
              <p>
                In pandas, when we read the data, it will automatically use data type np.int64 or np.float64. For a large dataframe that does not utilize 
                all the 64 bits of the data. It will use up a lot of memory which is unnecessary. 
                <pre className="prettyprint lang-python">
                  train = pd.read_csv(r'/kaggle/input/competitive-data-science-predict-future-sales/sales_train.csv') {next_line}
                  {next_line}
                  print("=================== Range of each column =====================") {next_line}
                  print(train[["date_block_num", "shop_id", "item_id", "item_price", "item_cnt_day"]].max() - train[["date_block_num", "shop_id", "item_id", "item_price", "item_cnt_day"]].min()) {next_line}
 {next_line}
                  print("=================== Memory Usage of Each Column in MB =====================") {next_line}
                  print(train.memory_usage() / 1024**2) {next_line}
                  print("=================== Total Memory Usage =====================") {next_line}
                  print("Total memory usage : " + str((train.memory_usage() / 1024**2).sum()) + " MB") {next_line}
                  {next_line}
                  """ {next_line}
                  =================== Range of each column ===================== {next_line}
                  date_block_num        33.0 {next_line}
                  shop_id               59.0 {next_line}
                  item_id            22169.0 {next_line}
                  item_price        307981.0 {next_line}
                  item_cnt_day        2191.0 {next_line}
                  dtype: float64 {next_line}
                  =================== Memory Usage of Each Column in MB =====================  {next_line}
                  Index              0.000122  {next_line}
                  date              22.398750  {next_line}
                  date_block_num    22.398750  {next_line}
                  shop_id           22.398750  {next_line}
                  item_id           22.398750  {next_line}
                  item_price        22.398750  {next_line}
                  item_cnt_day      22.398750  {next_line}
                  dtype: float64  {next_line}
                  =================== Total Memory Usage =====================  {next_line}
                  Total memory usage : 134.3926239013672 MB {next_line}
                  """
                </pre>
                You can see that without downcasting, the memory usage of this dataframe is 134 MB. Let's do some downcasting. 
                Remember to not over downcasting. Otherwise, there will be some data lost. Check the maximum and minimum of the 
                datatype.
                <pre className="prettyprint lang-python">
                  def downcast_dtypes(df): {next_line}
                {tab}  float_cols = [c for c in df if df[c].dtype == "float64"] {next_line}
                {tab}  df[float_cols] = df[float_cols].astype(np.float32) {next_line}
                {tab}  return df {next_line}
 {next_line}
                  train = downcast_dtypes(train) {next_line}
                  train.date_block_num = train.date_block_num.astype('int8') {next_line}
                  train.shop_id = train.shop_id.astype('int8') {next_line}
                  train.item_id = train.item_id.astype('int16') {next_line}
 {next_line}
                  print("=================== Memory Usage of Each Column in MB =====================") {next_line}
                  print(train.memory_usage() / 1024**2) {next_line}
                  print("=================== Total Memory Usage =====================") {next_line}
                  print("Total memory usage : " + str((train.memory_usage() / 1024**2).sum()) + " MB") {next_line}
{next_line}
                  """ {next_line}
                  =================== Memory Usage of Each Column in MB ===================== {next_line}
                  Index              0.000122 {next_line}
                  date              22.398750 {next_line}
                  date_block_num     2.799844 {next_line}
                  shop_id            2.799844 {next_line}
                  item_id            5.599688 {next_line}
                  item_price        11.199375 {next_line}
                  item_cnt_day      11.199375 {next_line}
                  dtype: float64 {next_line}
                  =================== Total Memory Usage ===================== {next_line}
                  Total memory usage : 55.99699783325195 MB
                  """
                 
                </pre>
                That's it! We instantly reduce the memory usage by more than half.
              </p>
            </Page>
)}}

export default HomePage;