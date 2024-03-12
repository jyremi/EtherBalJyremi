import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.http.HttpService;
import org.web3j.utils.Convert;
import org.web3j.utils.Convert.Unit;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.concurrent.ExecutionException;

public class EthereumBalance {
    public static BigDecimal getBalance(String address) throws ExecutionException, InterruptedException {
        Web3j web3 = Web3j.build(new HttpService("https://mainnet.infura.io/v3/your-api-key"));
        BigInteger balanceWei = web3.ethGetBalance(address, DefaultBlockParameterName.LATEST).send().getBalance();
        return Convert.fromWei(balanceWei.toString(), Unit.ETHER);
    }

    public static void main(String[] args) {
        String address = "0xYourAddress";
        try {
            BigDecimal balance = getBalance(address);
            System.out.println("Balance: " + balance + " ETH");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}